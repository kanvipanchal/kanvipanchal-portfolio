export async function submitGoogleInquiry(url, fields, { timeoutMs = 12_000, fetchImpl = fetch } = {}) {
  const controller = new AbortController()
  let timeoutId
  const timeout = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error('Submission confirmation timed out.'))
      controller.abort()
    }, timeoutMs)
  })

  try {
    const requestUrl = new URL(url)
    requestUrl.searchParams.set('requestId', crypto.randomUUID())
    const request = (async () => {
      const response = await fetchImpl(requestUrl.toString(), {
        method: 'POST',
        // The script parses JSON; text/plain avoids a CORS preflight.
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(fields),
        credentials: 'omit',
        redirect: 'follow',
        signal: controller.signal,
      })
      if (!response.ok) throw new Error('Submission confirmation is unavailable.')
      const result = await response.json()
      if (typeof result?.ok !== 'boolean') throw new Error('Invalid submission confirmation.')
      return result
    })()
    // Bound both the redirect and response-body wait, even if abort is delayed.
    return await Promise.race([request, timeout])
  } finally {
    clearTimeout(timeoutId)
  }
}
