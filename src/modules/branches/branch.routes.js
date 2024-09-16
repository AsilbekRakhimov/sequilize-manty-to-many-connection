import { Router } from "express";
import { ValidationMiddleware } from "../../middlewares/validation.middleware.js";
import { createShopSchema } from "../shops/dtos/create.shop.dto.js";
import branchController from "./branch.controller.js";
import { updateBranchSchema } from "./dtos/update.branch.dto.js";

const router = Router();

// create branch
router.post(
  "/",
  ValidationMiddleware(createShopSchema),
  branchController.createBranch
);

// get branches
router.get("/", branchController.getBranches);

// add shop
router.post("/add-shop", branchController.addSHop);

// update branch
router.put(
  "/:id",
  ValidationMiddleware(updateBranchSchema),
  branchController.updatebranch
);

// delete branch
router.delete("/:id", branchController.deleteBranch);

export default router;
