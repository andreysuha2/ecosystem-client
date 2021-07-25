import bodyParser from 'body-parser';
import express from 'express';
import cookieParser from 'cookie-parser';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

routes(app);

export default app;
