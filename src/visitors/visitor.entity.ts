import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VisitEntity } from '../visits/visit.entity';

@Entity('visitor')
export class VisitorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  surname: string;

  @Column({ nullable: true })
  middlename: string;

  @OneToMany(() => VisitEntity, (visit) => visit.visitor)
  visits: VisitEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
