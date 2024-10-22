import { scaffoldMicroservice } from '../services/hexagonal-scaffold.service';
import { log } from '../utils/logger';

export const createMicroservice = (name: string) => {
  try {
    scaffoldMicroservice(name);
    log(`Microservice "${name}" created successfully!`);
  } catch (error) {
    log(`Error: Could not create microservice. ${error}`);
  }
};
