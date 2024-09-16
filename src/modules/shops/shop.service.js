import { ConflictError } from "../../errors/conflict.error.js";
import Branch from "../branches/branch.schema.js";
import Shop from "./shop.schema.js";

class ShopService {
  #_define;
  #_branchModel;
  constructor() {
    this.#_define = Shop;
    this.#_branchModel = Branch;
  }

  // create shop
  async createOneShop({ name, location }) {
    try {
      const shop = await this.#_define.create({
        name,
        location,
      });
      return shop;
    } catch (error) {
      throw new ConflictError(error.message);
    }
  }

  // get shop
  async getAllShops() {
    try {
      const shops = await this.#_define.findAll({
        include: {
          model: Branch,
          as: "branches",
        },
      });
      // console.log(shops);
      return shops;
    } catch (error) {
      throw new ConflictError(error.message);
    }
  }

  // update shop
  async updateOneSHop({ name, location, id }) {
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

  async addBranches(branchId, shopId) {
    try {
      const branch = await this.#_branchModel.findByPk(branchId);
      const shop = await this.#_define.findByPk(shopId);

      await shop.addBranch(branch);
    } catch (error) {
      throw new ConflictError(error.message);
    }
  }

  // delete shop
  async deleteOneShop(id) {
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

export default new ShopService();
