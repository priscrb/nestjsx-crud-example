import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Company } from './company.entity';
import { CompaniesService } from '../company.service';
import { CompaniesController } from '../company.controller';
import { Franchise } from './franchise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company, Franchise])],
  providers: [CompaniesService],
  exports: [CompaniesService],
  controllers: [CompaniesController],
})
export class CompaniesModule {}
