import { Controller, UseInterceptors } from '@nestjs/common';
import { CrudController } from '@nestjsx/crud';

import { Company } from './entities/company.entity';

import { CompaniesService } from './company.service';
import { TypeOrmInterceptor } from './typeorm.interceptor';
// import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

// @Crud({
//   model: {
//     type: Company,
//   },
// })
@UseInterceptors(TypeOrmInterceptor)
@Controller('companies')
export class CompaniesController implements CrudController<Company> {
  constructor(public service: CompaniesService) {}
}
