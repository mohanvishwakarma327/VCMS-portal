const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/user-management', { useNewUrlParser: true, useUnifiedTopology: true });

// User Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});
const User = mongoose.model('User', userSchema);

// Routes
app.post('/addUser', async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.send('User added successfully');
});

app.post('/deleteUser', async (req, res) => {
    const { username } = req.body;
    await User.deleteOne({ username });
    res.send('User deleted successfully');
});

app.post('/resetUser', async (req, res) => {
    const { username, newPassword } = req.body;
    await User.updateOne({ username }, { password: newPassword });
    res.send('User password reset successfully');
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
