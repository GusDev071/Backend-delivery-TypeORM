import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm"
import { Order } from "./Order"

export enum PaymentMethod {
    MERCADO_PAGO = 'MERCADO_PAGO',
    PAYPAL = 'PAYPAL',
    STRIPE = 'STRIPE',
    CASH = 'CASH'
}

export enum PaymentStatus {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    REFUNDED = 'REFUNDED'
}

@Entity('payments')
export class Payment {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @OneToOne(() => Order, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'order_id' })
    order: Order

    @Column({
        type: "enum",
        enum: PaymentMethod
    })
    method: PaymentMethod

    @Column({ name: 'transaction_id', length: 255, nullable: true })
    transactionId: string

    @Column({ type: "numeric", precision: 10, scale: 2 })
    amount: number

    @Column({
        type: "enum",
        enum: PaymentStatus,
        default: PaymentStatus.PENDING
    })
    status: PaymentStatus

    @Column({ name: 'provider_data', type: "jsonb", nullable: true })
    providerData: any

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
}
