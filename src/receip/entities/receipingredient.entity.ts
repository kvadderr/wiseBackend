import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Receip } from './receip.entity';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';

@Entity()
export class ReceipIngredient {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Receip)
    @JoinColumn({ name: 'receip_id' })
    receip: Receip;

    @Column()
    ingredient_id: number

    @Column()
    receip_id: number

    @ManyToOne(() => Ingredient)
    @JoinColumn({ name: 'ingredient_id' })
    ingredient: Ingredient;

    @Column()
    quantity: string;
}
