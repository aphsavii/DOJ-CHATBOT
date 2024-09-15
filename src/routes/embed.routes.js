import Router from 'express';

const embedRouter = Router();  

// contrllers import
import { embedWebpageController } from '../controllers/embed.controller.js';

embedRouter.post('/webpage', embedWebpageController);

export  {embedRouter};