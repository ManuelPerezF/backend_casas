import e from "express";
import { HouseController } from "../controller/houseController";



//Declarar un conjunto de pruebas para la clase HouseController
describe('House Cntroller', () => {

    let houseController: HouseController;

    beforeEach(() => {
        const mockDBService = {
            getHouses: jest.fn(),
            getHouseById: jest.fn()
        }
        houseController = new HouseController(mockDBService);
    })

// Prueba unitaria 
    test ('should return some when both numbers are positive', async () => {
        // given
        const num1 = 10;
        const num2 = 10;

        // when
        const result = houseController.sum(num1, num2);

        // then
        expect(result).toBe(20);
    })


    test('should throw error when one of the numbers is negative', async () => {
        // given 
        const num1 = -10;
        const num2 = 10;

        // when
        const result = () => houseController.sum(num1, num2);

        //then 
        //expect( () => {houseController.sum(num1, num2)}).toThrow('Numbers must be positive');
        expect( () => result()).toThrow('Numbers must be positive');;
    })
})