const Task = require('../models/task')

exports.createTask = async (req, res) => {
  const newTask = new Task(req.body)
  await newTask.save()
  res.status(201).json(newTask)
}

exports.getTasks = async (req, res) => {
  const tasks = await Task.find()
  res.json(tasks)
}

exports.getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id)
  if (!task) {
    return res.status(404).json({ error: 'task not found' })
  }
  res.json(task)
}

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!task) {
    return res.status(404).json({ error: 'task not found' })
  }
  res.json(task)
}

exports.deleteTask = async (req, res) => {
  const task = await Task.findByIdAndRemove(req.params.id)
  if (!task) {
    return res.status(404).json({ error: 'task not found' })
  }
  res.json({ message: 'task deleted' })
}
