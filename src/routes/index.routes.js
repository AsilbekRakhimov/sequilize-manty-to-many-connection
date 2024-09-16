import { Router } from "express";
import shopRouter from '../modules/shops/shop.routes.js'
import branchRouter from '../modules/branches/branch.routes.js';

const router = Router();

router.use("/shop", shopRouter);
router.use("/branch", branchRouter);

export default router;