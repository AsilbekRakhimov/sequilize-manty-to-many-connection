import { DataTypes } from "sequelize";
import { sequelize } from "../../db/sequilize.db.js";
import Shop from "../shops/shop.schema.js";

const Branch = sequelize.define(
  "branches",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: "branches",
  }
);

export default Branch;
