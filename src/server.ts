import express from "express";
import cors from "cors";
import morgan from "morgan";
import { AppDataSource } from "./data-source";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());



const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
