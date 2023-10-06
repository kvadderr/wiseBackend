import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Receip {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 30 })
    name: string;

    @Column()
    image: string;

    @Column("text", { array: true })
    steps: string[];

    @Column()
    kkal: string;
    
    @Column()
    protein: string;

    @Column()
    fats: string;

    @Column()
    carb: string;

    @Column()
    time: string;

    @Column("text", { array: true })
    categories: string[];

    @Column("text", { array: true })
    goals: string[];

    @Column("text", { array: true })
    activity: string[];
}
