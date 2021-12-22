import { CrudOptions } from '@nestjsx/crud';

export type CrudOptionsInterface = Pick<CrudOptions, 'model' | 'dto'>;
