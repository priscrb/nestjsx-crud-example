import {
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import {
  // Crud,
  CrudController,
  CrudRequest,
  CrudRequestInterceptor,
  CrudResponseInterceptor,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { Crud } from './crud-helper';
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
    // req.parsed.filter = [
    //   {
    //     field: 'name',
    //     operator: '$eq',
    //     value: 'mic',
    //   },
    // ];

    return this.service.getMany(req);
  }

  // @Post('custom')
  // async customCreateOne(
  //   @ParsedRequest() req: CrudRequest,
  //   @ParsedBody() company: Company,
  // ) {
  //   return this.service.createOne(req, company);
  // }

  // get base(): CrudController<Company> {
  //   return this;
  // }

  // @Override('createOneBase')
  // // @Post('custom')
  // async customCreateOne(
  //   @ParsedRequest() req: CrudRequest,
  //   @ParsedBody() company: Company,
  // ) {
  //   const createdCompany: Company = await this.base.createOneBase(req, company);
  //   return this.service.createOne(req, createdCompany);

  //   // return this.service.createOne(req, company);
  // }

  @Get(':id')
  async customGetOne(@ParsedRequest() req: CrudRequest) {
    return this.service.getOne(req);
  }
}
