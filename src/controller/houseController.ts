import { FakeService } from "../db/fake/fakeService";
import { IDBService } from "../db/types/dbService";
import { House } from '../types/db/house';

export class HouseController {

    dbService: IDBService;

    constructor(dbService: IDBService) {
        this.dbService = dbService;
        
    }

    async getHousesByType(type : string, minPrice: number, maxPrice: number): Promise<House[]> {
        const houses = this.dbService.getHouses(type, minPrice, maxPrice)
        return houses 
    }

    sum (num1: number, num2: number) {
        if (num1  < 0 || num2 < 0) {
            throw new Error('Numbers must be positive');
        } 
        return num1 + num2;

    }

}