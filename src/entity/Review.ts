import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm"
import { User } from "./User"
import { Restaurant } from "./restaurant"
import { Order } from "./Order"

@Entity('reviews')
export class Review {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User

    @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'restaurant_id' })
    restaurant: Restaurant

    @OneToOne(() => Order, { nullable: true })
    @JoinColumn({ name: 'order_id' })
    order: Order

    @Column({ type: "int" })
    rating: number

    @Column({ type: "text", nullable: true })
    comment: string

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date
}
