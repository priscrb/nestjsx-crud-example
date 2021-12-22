import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Company } from './company.entity';

@Entity()
export class Franchise {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @ManyToMany((type) => Company, (company) => company.franchises)
  companies: Company[];
}
