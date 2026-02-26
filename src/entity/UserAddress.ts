import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity('user_addresses')
export class UserAddress {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User

    @Column({ length: 50, nullable: true })
    alias: string

    @Column({ name: 'address_line', type: "text" })
    addressLine: string

    @Column({ length: 100, nullable: true })
    city: string

    @Column({ type: "numeric", precision: 10, scale: 8, nullable: true })
    latitude: number

    @Column({ type: "numeric", precision: 11, scale: 8, nullable: true })
    longitude: number

    @Column({ name: 'is_default', default: false })
    isDefault: boolean

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date
}
