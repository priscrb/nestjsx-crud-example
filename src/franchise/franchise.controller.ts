import { Controller, Get, UseInterceptors } from '@nestjs/common';
import {
  CrudAuth,
  // Crud,
  CrudController,
  CrudRequest,
  CrudRequestInterceptor,
  Override,
  ParsedRequest,
} from '@nestjsx/crud';
import { Crud } from '../company/crud-helper';
import { Franchise } from './entities/franchise.entity';
import { FooInterceptor } from './foo.interceptor';
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

  // @UseInterceptors(FooInterceptor)
  @Override()
  @Get('custom')
  async customGetMany(@ParsedRequest() req: CrudRequest) {
    // req.options.query.join.companies = { eager: true };
    // req.options.query.limit = 2;
    // req.options.query.join.companies.eager = false;
    // req.options.query.alwaysPaginate = true;
    // req.options.query.sort = [{ field: 'id', order: 'ASC' }];
    // req.parsed.search = {
    //   name: 'apple',
    // };

    // req.parsed.filter = [{ field: 'name', operator: 'eq', value: 'apple' }];

    console.log('query ->', req.options.query.filter);
    console.log('parsed ->', req.parsed.filter); // filter comes from parsed

    return this.service.getMany(req);
  }
  @Get(':id')
  async customGetOne(@ParsedRequest() req: CrudRequest) {
    return this.service.getOne(req);
  }
}
