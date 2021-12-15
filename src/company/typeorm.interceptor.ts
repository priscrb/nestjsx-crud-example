import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Observable } from 'rxjs';
import { Company } from './entities/company.entity';

import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedRequest,
} from '@nestjsx/crud';

@Injectable()
export class TypeOrmInterceptor implements NestInterceptor {
  constructor(private typeormService: TypeOrmCrudService<Company>) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    this.typeormService.getMany(context.switchToHttp().getRequest());
    return next.handle();
  }
}
