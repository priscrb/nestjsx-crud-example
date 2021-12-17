import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column() address: string;

  @Column() employees: number;

  @Column() openingDate: Date;

  @Column() remote: boolean;
}
