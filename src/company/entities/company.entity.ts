import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Franchise } from '../../franchise/entities/franchise.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column() address: string;

  @Column() employees: number;

  @Column() openingDate: Date;

  @Column() remote: boolean;

  // @JoinTable()
  @OneToMany((type) => Franchise, (franchise) => franchise.companies, {
    cascade: true,
  })
  franchises: Franchise;
}
