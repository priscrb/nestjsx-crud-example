import {
  Controller,
  Get,
  InternalServerErrorException,
  Post,
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

// @Crud({
//   model: {
//     type: Company,
//   },
// })
@Controller('companies')
export class CompaniesController implements CrudController<Company> {
  constructor(public service: CompaniesService) {}

  get base(): CrudController<Company> {
    return this;
  }

  @UseInterceptors(CrudRequestInterceptor)
  @Get('custom')
  async customGetMany(@ParsedRequest() req: CrudRequest) {
    return this.service.getMany(req);
  }

  @Post('custom')
  async customCreateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Company,
  ) {
    return this.service.createOne(req, dto);
  }
}
