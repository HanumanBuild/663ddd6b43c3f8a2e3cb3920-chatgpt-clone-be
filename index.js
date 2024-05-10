const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000; // Hard-coded PORT

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from ChatGPT clone backend!');
});

app.post('/chat', (req, res) => {
  const userInput = req.body.message;
  const responseMessage = `Received your message: ${userInput}`;
  res.json({ message: responseMessage });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});