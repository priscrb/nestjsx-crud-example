import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Company } from '../../company/entities/company.entity';

@Entity()
export class Franchise {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @ManyToOne((type) => Company, (company: Company) => company.franchises, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  companies: Company;
}
