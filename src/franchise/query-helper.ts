import { CrudRequest } from '@nestjsx/crud';
import { SCondition } from '@nestjsx/crud-request';

export class QueryHelper {
  constructor(private req: CrudRequest) {}

  addOptions(customOptions) {
    this.req.options = { ...this.req.options, ...customOptions };
    return this;
  }

  addFilters(customSearch: SCondition) {
    // this.req.parsed.search = { ...this.req.parsed.search, ...customSearch };

    this.req.parsed.search = {
      $and: [this.req.parsed.search, customSearch],
      // $and: [
      //   {
      //     ...this.req.parsed.search,

      //     // req.customSearch,
      //   },
      // ],
      // ...this.req.parsed.search,

      // ...customSearch,
    };

    console.log(this.req.parsed.search);

    // this.req.parsed.search = [
    //   {
    //     $and: [
    //       {
    //         ...this.req.parsed.search,
    //         ...customSearch,
    //       },
    //     ],
    //   },
    // ];

    // { '$and': [ undefined, {}, { name: [Object] } ] }

    // this.req.parsed.search = {
    //   ...this.req.parsed.search,
    //   ...customSearch,
    // };

    // this.req.parsed.query.search = {
    //   $and: [this.req.parsed.query.search, customSearch],
    // };
    return this;
  }
}
