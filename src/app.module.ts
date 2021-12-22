import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './company/company.module';
import { FranchiseModule } from './franchise/franchise.module';

@Module({
  imports: [
    CompaniesModule,
    FranchiseModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: 'localhost', // database host
      port: 5432, // database host
      username: 'postgres', // username
      password: 'pass123', // user password
      database: 'postgres', // name of our database,
      autoLoadEntities: true, // models will be loaded automatically
      synchronize: true, // your entities will be synced with the database(recommended: disable in prod),
      logging: 'all', // log queries
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
