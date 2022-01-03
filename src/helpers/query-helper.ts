import { CrudRequest } from '@nestjsx/crud';
import { SCondition } from '@nestjsx/crud-request';

export class QueryHelper {
  constructor(private req: CrudRequest) {}

  addOptions(customOptions) {
    this.req.options = { ...this.req.options, ...customOptions };
    return this;
  }

  addFilters(customSearch: SCondition) {
    this.req.parsed.search = {
      $and: [this.req.parsed.search, customSearch],
    };
    return this;
  }
}
