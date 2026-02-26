import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { Restaurant } from "./restaurant"

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @Column({ length: 150 })
    name: string

    @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'restaurant_id' })
    restaurant: Restaurant
       
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date
}