import test from 'node:test'
import assert from 'node:assert/strict'
import { submitGoogleInquiry } from './googleContactService.js'

const url = 'https://script.google.com/macros/s/test/exec'

test('returns the confirmed result and sends the fields unchanged', async () => {
  const fields = { name: 'Test', message: 'Hello & welcome', company: 'Example' }
  const result = await submitGoogleInquiry(url, fields, {
    fetchImpl: async (requestUrl, options) => {
      assert.equal(new URL(requestUrl).pathname, '/macros/s/test/exec')
      assert.deepEqual(JSON.parse(options.body), fields)
      assert.equal(options.headers['Content-Type'], 'text/plain;charset=utf-8')
      return { ok: true, json: async () => ({ ok: true }) }
    },
  })
  assert.equal(result.ok, true)
})

for (const stage of ['request', 'response body']) {
  test(`stops waiting when the ${stage} hangs, without retrying`, async () => {
    let calls = 0
    let signal
    await assert.rejects(submitGoogleInquiry(url, {}, {
      timeoutMs: 10,
      fetchImpl: async (_, options) => {
        calls += 1
        signal = options.signal
        if (stage === 'request') return new Promise(() => {})
        return { ok: true, json: () => new Promise(() => {}) }
      },
    }), /timed out/)
    assert.equal(signal.aborted, true)
    assert.equal(calls, 1)
  })
}

test('keeps a script rejection distinct from an unconfirmed request', async () => {
  const rejection = { ok: false, message: 'Please enter a valid email address.' }
  assert.deepEqual(await submitGoogleInquiry(url, {}, {
    fetchImpl: async () => ({ ok: true, json: async () => rejection }),
  }), rejection)
})

test('does not report success on an HTTP error or malformed response', async () => {
  for (const response of [
    { ok: false },
    { ok: true, json: async () => ({ message: 'Missing confirmation' }) },
  ]) {
    await assert.rejects(submitGoogleInquiry(url, {}, { fetchImpl: async () => response }))
  }
})
