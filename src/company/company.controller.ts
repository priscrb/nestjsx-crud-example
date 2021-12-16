import {
  Controller,
  Get,
  InternalServerErrorException,
  UseInterceptors,
} from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  CrudRequestInterceptor,
  ParsedRequest,
} from '@nestjsx/crud';
import { Company } from './entities/company.entity';
import { CompaniesService } from './company.service';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Crud({
  model: {
    type: Company,
  },
})
@Controller('companies')
export class CompaniesController implements CrudController<Company> {
  constructor(
    public service: CompaniesService, // public typeormService: TypeOrmCrudService<Company>,
  ) {}

  get base(): CrudController<Company> {
    return this;
  }

  @UseInterceptors(CrudRequestInterceptor)
  @Get('custom')
  async customGetMany(@ParsedRequest() req: CrudRequest) {
    if (this.base?.getManyBase) {
      return this.service.getMany(req);
    } else {
      throw new InternalServerErrorException(
        'No createOneBase method exists on CrudController, this should never happen',
      );
    }
  }
}
