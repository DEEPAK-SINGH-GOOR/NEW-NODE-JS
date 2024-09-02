const express = require('express');
const app = express();
app.use(express.json());

let courses = [];
let nextId = 1;

app.get('/', (req, res) => {
  res.send('Welcome to the Course API');
});

app.get('/course/all', (req, res) => {
  res.json(courses);
});

app.post('/course/add', (req, res) => {
  let { name, description, durationTime, imageUrl, language, price } = req.body;
  if (!name || !description || !durationTime || !imageUrl || !language || !price) {
    return res.status(400).send('All fields are required');
  }
  let newCourse = { name, description, durationTime, imageUrl, language, price, id: nextId++ };
  courses.push(newCourse);
  res.json(courses);
});

app.patch('/course/update/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let course = courses.find(c => c.id === id);
  if (!course) {
    return res.status(404).send('Course not found');
  }
  Object.assign(course, req.body);
  res.json(courses);
});

app.delete('/course/delete/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let index = courses.findIndex(c => c.id === id);
  if (index === -1) {
    return res.status(404).send('Course not found');
  }
  courses.splice(index, 1);
  res.json(courses);
});

app.listen(8090, () => {
  console.log('Server running on port 8090');
});
