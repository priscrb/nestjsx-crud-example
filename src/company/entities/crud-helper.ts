import { CrudRoutesFactory } from '@nestjsx/crud';
// import { CrudOptions } from '@nestjsx/crud';
import { CrudOptionsInterface } from './crud-options.interface';

// eslint-disable-next-line @typescript-eslint/ban-types
export const Crud = (options: CrudOptionsInterface) => (target: Object) => {
  const factoryMethod = CrudRoutesFactory;
  let factory = new factoryMethod(target, options);
  factory = undefined;
};
