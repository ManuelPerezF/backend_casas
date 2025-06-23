import express, { Request, Response, NextFunction } from 'express';
import { HouseController } from '../controller/houseController';
import { HouseHandler } from '../handler/houseHandler';
import { FakeService } from '../db/fake/fakeService';
import { PostgresService } from '../db/postgres/postgresService';

const router = express.Router();

const fakeService = new FakeService();
const pS = new PostgresService("");
const houseController = new HouseController(pS);


const houseHandler = new HouseHandler(houseController);

router.get('/', houseHandler.getHouses.bind(houseHandler));

export default router;