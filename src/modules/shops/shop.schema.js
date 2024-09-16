import { DataTypes } from "sequelize";
import { sequelize } from "../../db/sequilize.db.js";
import Branch from "../branches/branch.schema.js";

const Shop = sequelize.define(
  "shops",
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
    tableName: "shops",
  }
);

export default Shop;
