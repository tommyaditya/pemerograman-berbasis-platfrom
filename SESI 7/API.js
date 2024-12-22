const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];
let currentId = 1;

app.post('/tugas', (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    const newTask = { id: currentId++, title, description: description || '' };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
});

app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description } = req.body;

    const task = tasks.find(t => t.id === taskId);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    if (title) task.title = title;
    if (description) task.description = description;

    res.json(task);
});

app.delete('/tugas/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask[0]);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
