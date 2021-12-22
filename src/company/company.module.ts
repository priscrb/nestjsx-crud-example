import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Company } from './entities/company.entity';
import { CompaniesService } from './company.service';
import { CompaniesController } from './company.controller';
import { Franchise } from 'src/franchise/entities/franchise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company, Franchise])],
  providers: [CompaniesService],
  exports: [CompaniesService],
  controllers: [CompaniesController],
})
export class CompaniesModule {}
