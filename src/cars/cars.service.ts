import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interface/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
  ];

  fintAll() {
    return this.cars;
  }

  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Card with id '${id}' not found`);
    console.log(car);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    // createCarDto.id = uuid()
    // const newCar = this.cars.push(createCarDto)
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };

    const newCar = this.cars.push(car);
    return newCar;
  }

  uptadate(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findById(id); //verificamos si el id se encuentra
    if (updateCarDto.id && updateCarDto.id !== id)
      //si recibo el id y aparte si ese id es diferente mando un throw
      throw new BadRequestException(`Car id is not valid inside body`);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB, //exparzo las propiedades del carDB
          ...updateCarDto, //luego sobreescribo las propiedades que vengan en el updateCarDto
          id, // y si en el updateCarDto viene un id este id es que sobreescribir eso
        };
        return carDB;
      }
      return car;
    });

    return carDB; //carro actualizado
  }

  delete(id: string) {
    const car = this.findById(id); // verificamos si el id se encuentra
    this.cars = this.cars.filter((car) => car.id !== id); //comprueba si cumple con el elemento  y si no lo los salta(elimina)
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
