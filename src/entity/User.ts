import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

export enum UserRole {
    ADMIN = "ADMIN",
    RESTAURANT = "RESTAURANT",
    CLIENT = "CLIENT",
    DELIVERY = "DELIVERY"
}

@Entity('users')
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 100 })
    name: string

    @Column({ length: 150, unique: true })
    email: string

    @Column({ length: 255, select: false }) // select: false para no devolver la contraseña por defecto
    password: string

    @Column({ length: 20, nullable: true })
    phone: string

    @Column({ name: 'img_profile', length: 255, nullable: true })
    imgProfile: string

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.CLIENT
    })
    role: UserRole

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
}
