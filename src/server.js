import express from "express";
import bodyParser from "body-parser";
import appConfig from "./config/app.config.js";
import { sequelize } from "./db/sequilize.db.js";
import router from "./routes/index.routes.js";
import { ErrorHandlerMiddleware } from "./middlewares/error.handler.middleware.js";
import morgan from "morgan";
import models from "./modules/index.js";


const app = express();

// malumotlarni almashish
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// if(process.env.NODE_ENV.trim() == "development") {
//   app.use(morgan("tiny"));
// }

// database bn ulanish
sequelize
  .sync({
    force: false,
    logging: false,
  })
  .catch((err) => {
    console.log(err.message);
  });

// main endpoint
app.use("/api/v1", router);

// middleware for catch errors
app.use(ErrorHandlerMiddleware);

// serverni run qilish
app.listen(appConfig.port, appConfig.host, () => {
  console.log("Server is running on port: " + appConfig.port);
});
