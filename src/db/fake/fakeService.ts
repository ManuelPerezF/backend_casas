import { House } from '../../types/db/house';


const FakeHouses = [
    {
        id: 1,
        price: 100000,
        address: '123 Main St',
        description: 'Beautiful house in the city center',
        rating: 4.5,
        terrainArea: 200,
        builtArea: 150,
        type: 'SALE'
    },
    {
        id: 2,
        price: 200000,
        address: '456 Elm St',
        description: 'Spacious house with a large yard',
        rating: 4.7,
        terrainArea: 300,
        builtArea: 250,
        type: 'RENT'
    }

]

export class FakeService {

    async getHouses(type: string, minPrice: number, maxPrice: number): Promise<House[]> {
        return FakeHouses;
    }

    async getHouseById(id: number): Promise<House>{
        return FakeHouses[id];
    }

}   



