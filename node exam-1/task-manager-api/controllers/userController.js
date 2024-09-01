const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signup = async (req, res) => {
  const { username, email, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = new User({ username, email, password: hashedPassword })
  await newUser.save()
  res.status(201).json({ message: 'user created' })
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ error: 'invalid credentials' })
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  })
  res.json({ token })
}
