import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Franchise } from './entities/franchise.entity';
import { FranchisesService } from './franchise.service';
import { FranchisesController } from './franchise.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Franchise])],
  providers: [FranchisesService],
  exports: [FranchisesService],
  controllers: [FranchisesController],
})
export class FranchiseModule {}
