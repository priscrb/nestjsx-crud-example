import { Controller, Get, UseInterceptors } from '@nestjs/common';
import {
  // Crud,
  CrudController,
  CrudRequest,
  CrudRequestInterceptor,
  ParsedRequest,
} from '@nestjsx/crud';
import { Crud } from '../helpers/crud-helper';
import { Franchise } from './entities/franchise.entity';
// import { FooInterceptor } from './foo.interceptor';
import { FranchisesService } from './franchise.service';
import { QueryHelper } from '../helpers/query-helper';

@Crud({
  model: {
    type: Franchise,
  },
})
@UseInterceptors(CrudRequestInterceptor)
@Controller('franchises')
export class FranchisesController implements CrudController<Franchise> {
  constructor(public service: FranchisesService) {}

  @Get('custom')
  async customGetMany(@ParsedRequest() req: CrudRequest) {
    const helper = new QueryHelper(req);
    const customOptions = { query: { join: { company: { eager: false } } } };

    /**
     * Create custom filters
     */
    const customFilter = {
      name: {
        $eq: 'apple',
      },
    };

    helper.addOptions(customOptions).addFilters(customFilter);
    return this.service.getMany(req);
  }

  @Get(':id')
  async customGetOne(@ParsedRequest() req: CrudRequest) {
    return this.service.getOne(req);
  }
}
