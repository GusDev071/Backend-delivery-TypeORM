import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity('restaurants')
export class Restaurant {
    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @Column({ length: 150 })
    name: string

    @Column({ type: "text", nullable: true })
    description: string

    @Column({ type: "text", nullable: false })
    address: string

    @Column({ length: 20, nullable: true })
    phone: string

    @OneToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'owner_id' })
    owner: User

    // Columna explícita para la FK, marcada como unique: true para reflejar el esquema SQL
    @Column({ name: 'owner_id', type: 'uuid', unique: true })
    ownerId: string
    
    @Column({ name: 'img_url', length: 255, nullable: true })
    imgUrl: string

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date
}
