import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { PARSED_CRUD_REQUEST_KEY } from '@nestjsx/crud/lib/constants';
import { Observable } from 'rxjs';

@Injectable()
export class FooInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const options = context.switchToHttp().getRequest()[
      PARSED_CRUD_REQUEST_KEY
    ].options;
    options.query = {
      join: {
        companies: {
          eager: true,
        },
      },
    };

    return next.handle();
  }
}
