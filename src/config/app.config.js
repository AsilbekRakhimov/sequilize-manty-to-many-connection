import dotenv from "dotenv";
dotenv.config();

const appConfig = {
  port: process.env.PORT || 4000,
  host: process.env.HOST,
};

export default appConfig