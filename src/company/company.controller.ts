import { Controller, Get, UseInterceptors } from '@nestjs/common';
import {
  CrudController,
  CrudRequest,
  CrudRequestInterceptor,
  ParsedRequest,
} from '@nestjsx/crud';
import { Crud } from '../helpers/crud-helper';
import { Company } from './entities/company.entity';
import { CompaniesService } from './company.service';

@Crud({
  model: {
    type: Company,
  },
})
@UseInterceptors(CrudRequestInterceptor)
@Controller('companies')
export class CompaniesController implements CrudController<Company> {
  constructor(public service: CompaniesService) {}

  @Get('custom')
  async customGetMany(@ParsedRequest() req: CrudRequest) {
    return this.service.getMany(req);
  }

  @Get(':id')
  async customGetOne(@ParsedRequest() req: CrudRequest) {
    return this.service.getOne(req);
  }
}
