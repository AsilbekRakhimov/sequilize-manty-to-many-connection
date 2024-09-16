import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";

export const sequelize = new Sequelize(dbConfig.dbURL, {
  logging: false,
});
