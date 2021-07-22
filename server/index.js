import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.all('/getJSON', (req, res) => {
    res.json({ data: 'data' });
});

export default app;
