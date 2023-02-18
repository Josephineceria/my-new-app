const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send({ message: 'Hello from the server!' });
  });

  const port = 3000;

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });


