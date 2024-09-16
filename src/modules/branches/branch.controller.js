import branchService from "./branch.service.js";

class BranchController {
  #_service;
  constructor() {
    this.#_service = branchService;
  }

  // create branch
  createBranch = async (req, res, next) => {
    try {
      const branch = await this.#_service.createOneBranch(req.body);
      if (!branch) {
        res.status(400).send({
          message: "Bad request",
        });
        return;
      }
      res.status(201).send({
        message: "success",
        data: branch,
      });
    } catch (error) {
      next(error);
    }
  };

  // get branch
  getBranches = async (req, res, next) => {
    try {
      const branches = await this.#_service.getAllBranches();
      if (!branches) {
        res.status(404).send({
          message: "not found",
        });
        return;
      }
      res.status(200).send({
        message: "success",
        data: branches,
      });
    } catch (error) {
      next(error);
    }
  };

  // add shop
  addSHop = async (req, res, next) => {
    try {
      const { shopId, branchId } = req.body;
      await this.#_service.addShop(branchId, shopId);
      res.status(200).send({
        message: "success",
      });
    } catch (error) {
      next(error);
    }
  };

  // update branch
  updatebranch = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await this.#_service.updateOneBranch({ ...req.body, id });
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

  // delete branch
  deleteBranch = async (req, res, next) => {
    try {
      const data = await this.#_service.deleteOneBranch(req.params.id);
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

export default new BranchController();
