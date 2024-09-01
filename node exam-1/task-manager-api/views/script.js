document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const response = await fetch('/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    });
    const result = await response.json();
    console.log(result);
  });
  
  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const response = await fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const result = await response.json();
    console.log(result);
  });
  
  document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const description = document.getElementById('description').value;
    const response = await fetch('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ taskName, description })
    });
    const result = await response.json();
    console.log(result);
    loadTasks();
  });
  
  const loadTasks = async () => {
    const response = await fetch('/tasks');
    const tasks = await response.json();
    const tasksList = document.getElementById('tasks-list');
    tasksList.innerHTML = '';
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = `${task.taskName} - ${task.description} - ${task.status}`;
      tasksList.appendChild(li);
    });
  }
  
  loadTasks();
  