import Project from '../models/Project.js'

export async function listProjects(req, res, next) {
  try {
    res.json(await Project.find().sort('order'))
  } catch (err) {
    next(err)
  }
}

export async function getProjectBySlug(req, res, next) {
  try {
    const project = await Project.findOne({ slug: req.params.slug })
    if (!project) return res.status(404).json({ message: 'Project not found' })
    res.json(project)
  } catch (err) {
    next(err)
  }
}

export async function createProject(req, res, next) {
  try {
    res.status(201).json(await Project.create(req.body))
  } catch (err) {
    next(err)
  }
}

export async function updateProject(req, res, next) {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!project) return res.status(404).json({ message: 'Project not found' })
    res.json(project)
  } catch (err) {
    next(err)
  }
}

export async function deleteProject(req, res, next) {
  try {
    await Project.findByIdAndDelete(req.params.id)
    res.status(204).send()
  } catch (err) {
    next(err)
  }
}
