import {Request, Response, NextFunction} from 'express';
import { HouseController } from "../controller/houseController";
import { PostgresService } from "../db/postgres/postgresService";
import { FakeService } from "../db/fake/fakeService";

export class HouseHandler {
    houseController: HouseController;
    constructor(houseController: HouseController) {
        this.houseController = houseController;
    }

    async getHouses(request : Request, response : Response) {
        try {
            const houses = this.houseController.getHousesByType("sell",0,100)
            response.json(houses);
        } catch (error) {
            response.status(500).json({ error: 'Internal server error' });
        }

    }
}