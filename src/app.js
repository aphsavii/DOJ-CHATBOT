import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
const app = express();
const httpServer = createServer(app);

app.use(express.static('public'));
app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({ extended: true, limit:'16kb' }));
app.use(cors({origin: '*'}));
// Routes import
import { queryRouter } from './routes/query.routes.js';
import {embedRouter} from './routes/embed.routes.js';
app.get('/', (req, res) => {
    return res.json({
        msg:"Hello"
    })
});
app.use("/ask",queryRouter);
app.use("/embed",embedRouter);
export { httpServer}