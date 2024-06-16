import express from 'express';
import path from 'path';
import serverRouter from './server';
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use("/servers", serverRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

