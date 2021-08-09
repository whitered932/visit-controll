import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { VisitorEntity } from '../visitors/visitor.entity';

@Entity('visit')
export class VisitEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => VisitorEntity, (visitor) => visitor.visits)
  visitor: VisitorEntity;

  @CreateDateColumn()
  date: Date;
}
