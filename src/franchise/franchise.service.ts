import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

import { Franchise } from './entities/franchise.entity';

@Injectable()
export class FranchisesService extends TypeOrmCrudService<Franchise> {
  constructor(@InjectRepository(Franchise) public repo: Repository<Franchise>) {
    super(repo);
  }
}
