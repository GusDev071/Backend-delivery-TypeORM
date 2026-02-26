import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { Category } from "./category"
import { Restaurant } from "./restaurant"

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 150 })
    name: string

    @Column({ type: "text", nullable: true })
    description: string

    @Column({ type: "numeric", precision: 10, scale: 2 })
    price: number

    @Column({ name: 'image_url', type: "text", nullable: true })
    imageUrl: string

    @Column({ default: true })
    available: boolean

    @ManyToOne(() => Category, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'category_id' })
    category: Category

    @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'restaurant_id' })
    restaurant: Restaurant

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date
}
