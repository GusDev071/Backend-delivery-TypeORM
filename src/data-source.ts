import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Restaurant } from "./entity/restaurant"
import { Category } from "./entity/category"
import { Product } from "./entity/Product"
import { UserAddress } from "./entity/UserAddress"
import { Order } from "./entity/Order"
import { OrderItem } from "./entity/OrderItem"
import { Payment } from "./entity/Payment"
import { Review } from "./entity/Review"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [
        User, 
        Restaurant, 
        Category, 
        Product, 
        UserAddress, 
        Order, 
        OrderItem, 
        Payment, 
        Review
    ],
    migrations: [],
    subscribers: [],
})
