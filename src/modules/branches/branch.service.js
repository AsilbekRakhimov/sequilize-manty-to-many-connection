import { sequelize } from "../../db/sequilize.db.js";
import { ConflictError } from "../../errors/conflict.error.js";
import Shop from "../shops/shop.schema.js";
import Branch from "./branch.schema.js";

class BranchController {
  #_define;
  #_shopModule;
  constructor() {
    this.#_define = Branch;
    this.#_shopModule = Shop;
  }

  // create branch
  async createOneBranch({ name, location }) {
    try {
      const branch = await this.#_define.create({
        name,
        location,
      });

      // await branch.addShop({id: 1})

      return branch;
    } catch (error) {
      throw new ConflictError(error.message);
    }
  }

  // get branch
  async getAllBranches() {
    try {
      const branches = await this.#_define.findAll({
        include: {
          as: "shops",
          model: Shop,
        },
      });
      return branches;
    } catch (error) {
      throw new ConflictError(error.message);
    }
  }

  // add shop
  async addShop(branchId, shopId) {
    try {
      const shop = await this.#_shopModule.findByPk(shopId);
      const branch = await this.#_define.findByPk(branchId);

      await branch.addShop(shop);
    } catch (error) {
      throw new ConflictError(error.message);
    }
  }
  // update branch
  async updateOneBranch({ name, location, id }) {
    try {
      const data = await this.#_define.update(
        {
          name,
          location,
        },
        {
          where: {
            id,
          },
        }
      );
      return data;
    } catch (error) {
      throw new ConflictError(error.message);
    }
  }

  // delete branch
  async deleteOneBranch(id) {
    try {
      const data = await this.#_define.destroy({
        where: {
          id,
        },
      });
      return data;
    } catch (error) {
      throw new ConflictError(error.message);
    }
  }
}

export default new BranchController();
