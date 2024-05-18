import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly CarsService: CarsService,
    private readonly BrandService: BrandsService,
  ) {}

  populareDB() {
    // BRANDS_SEED
    // CARS_SEED
    this.CarsService.fillCarsWithSeedData(CARS_SEED);
    this.BrandService.fillBrandsWithSeedData(BRANDS_SEED);
    return 'SEED executed';
  }
}
