import Branch from "./branches/branch.schema.js";
import Shop from "./shops/shop.schema.js";

Shop.belongsToMany(Branch, { through: "ShopBranch", as: "branches" });
Branch.belongsToMany(Shop, { through: "ShopBranch", as: "shops" });

export default { Shop, Branch };
