import dotenv from "dotenv";
dotenv.config();
const dbConfig = {
  dbURL: process.env.DB_URL,
};

export default dbConfig;
