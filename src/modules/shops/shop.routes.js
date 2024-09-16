import { Router } from "express";
import { ValidationMiddleware } from "../../middlewares/validation.middleware.js";
import { createShopSchema } from "./dtos/create.shop.dto.js";
import shopController from "./shop.controller.js";
import { updateShopSchema } from "./dtos/update.shop.dto.js";

const router = Router();

// create shop
router.post(
  "/",
  ValidationMiddleware(createShopSchema),
  shopController.createShop
);

router.post("/add-branch", shopController.addBranch);

// get shop
router.get("/", shopController.getShops);

// update shop
router.put(
  "/:id",
  ValidationMiddleware(updateShopSchema),
  shopController.updateShop
);

// delete shop
router.delete("/:id", shopController.deleteShop);

export default router;
