import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"
import { Restaurant } from "./restaurant"

export enum OrderStatus {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    PREPARING = 'PREPARING',
    READY = 'READY',
    DELIVERED = 'DELIVERED',
    CANCELLED = 'CANCELLED'
}

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User

    @ManyToOne(() => Restaurant)
    @JoinColumn({ name: 'restaurant_id' })
    restaurant: Restaurant

    @Column({
        type: "enum",
        enum: OrderStatus,
        default: OrderStatus.PENDING
    })
    status: OrderStatus

    @Column({ type: "numeric", precision: 10, scale: 2 })
    total: number

    @Column({ name: 'delivery_address', type: "text" })
    deliveryAddress: string

    @Column({ name: 'delivery_latitude', type: "numeric", precision: 10, scale: 8, nullable: true })
    deliveryLatitude: number

    @Column({ name: 'delivery_longitude', type: "numeric", precision: 11, scale: 8, nullable: true })
    deliveryLongitude: number

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
}
