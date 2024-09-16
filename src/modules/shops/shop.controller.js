import shopService from "./shop.service.js";

class ShopController {
  #_service;
  constructor() {
    this.#_service = shopService;
  }

  // create shop
  createShop = async (req, res, next) => {
    try {
      const shop = await this.#_service.createOneShop(req.body);
      if (!shop) {
        res.status(400).send({
          message: "Bad request",
        });
        return;
      }
      res.status(201).send({
        message: "success",
        data: shop,
      });
    } catch (error) {
      next(error);
    }
  };

  // get shop
  getShops = async (req, res, next) => {
    try {
      const shops = await this.#_service.getAllShops();
      if (!shops) {
        res.status(404).send({
          message: "not found",
        });
        return;
      }
      res.status(200).send({
        message: "success",
        data: shops,
      });
    } catch (error) {
      next(error);
    }
  };

  // update shop
  updateShop = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await this.#_service.updateOneSHop({ ...req.body, id });
      if (!data[0]) {
        res.status(404).send({
          message: "not found",
        });
        return;
      }
      res.status(200).send({
        message: "updated",
      });
    } catch (error) {
      next(error);
    }
  };

  addBranch = async (req, res, next) => {
    try {
      const { branchId, shopId } = req.body;

      await this.#_service.addBranches(branchId, shopId);

      res.send("ok");
    } catch (error) {
      next(error);
    }
  };

  // delete shop
  deleteShop = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await this.#_service.deleteOneShop(id);
      if (!data) {
        res.status(404).send({
          message: "not found",
        });
        return;
      }
      res.status(200).send({
        message: "deleted",
      });
    } catch (error) {
      next(error);
    }
  };
}

export default new ShopController();
