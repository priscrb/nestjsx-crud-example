import { CrudRoutesFactory } from '@nestjsx/crud';
import { CrudOptionsInterface } from '../interfaces/crud-options.interface';

/**
 * CRUD decorator wrapper
 */

// eslint-disable-next-line @typescript-eslint/ban-types
export const Crud = (options: CrudOptionsInterface) => (target: Object) => {
  const factoryMethod = CrudRoutesFactory;
  let factory = new factoryMethod(target, options);
  factory = undefined;
};
