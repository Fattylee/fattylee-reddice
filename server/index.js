import express from 'express';
import path from 'path'

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/api', (req, res) => {
  res.send('happy api');
});


const port = process.env.PORT || 7000;
app.listen(port, console.log('Server running on port', port))