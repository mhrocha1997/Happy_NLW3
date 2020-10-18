import OrphanageController from './controllers/OrphanageController';
import {Router} from 'express';
import multer from 'multer';

import uploadConfig from'./config/upload';
import Orphanage from './models/Orphanage';

const routes = Router();
const upload = multer(uploadConfig);


routes.post('/orphanages',upload.array('images'), OrphanageController.create);
routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id',OrphanageController.show);
routes.put('/orphanages/:id', upload.array('images'), OrphanageController.update);
routes.delete('/orphanages/:id',OrphanageController.delete);

export default routes;