import { Controller, Get, UseInterceptors } from '@nestjs/common';
import {
  // Crud,
  CrudController,
  CrudRequest,
  CrudRequestInterceptor,
  ParsedRequest,
} from '@nestjsx/crud';
import { Crud } from '../company/crud-helper';
import { Franchise } from './entities/franchise.entity';
import { FranchisesService } from './franchise.service';

@Crud({
  model: {
    type: Franchise,
  },
  // query: {
  //   join: {
  //     companies: {
  //       eager: true,
  //     },
  //   },
  // },
})
@UseInterceptors(CrudRequestInterceptor)
@Controller('franchises')
export class FranchisesController implements CrudController<Franchise> {
  constructor(public service: FranchisesService) {}

  @Get('custom')
  async customGetMany(@ParsedRequest() req: CrudRequest) {
    return this.service.getMany(req);
  }
  @Get(':id')
  async customGetOne(@ParsedRequest() req: CrudRequest) {
    return this.service.getOne(req);
  }
}
