/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsPositive } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tb_colaboradores' })
export class Colaborador {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  cargo: string;

  @IsNotEmpty()
  @IsPositive()
  @Column()
  salario: number;

  @CreateDateColumn()
  data_ad: Date;
}
