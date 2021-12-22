import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
  JoinColumn,
} from 'typeorm';
import { Franchise } from './franchise.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column() address: string;

  @Column() employees: number;

  @Column() openingDate: Date;

  @Column() remote: boolean;

  @JoinTable()
  @ManyToMany((type) => Franchise, (franchise) => franchise.companies, {
    cascade: true,
  })
  franchises: Franchise[];
}
