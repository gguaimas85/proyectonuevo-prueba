import { sequelize } from "./src/db";
import app from "./src/app";
import config from "../api/lib/config";

sequelize
  .sync({ force: true, logging: false })
  .then(() => {
    console.log("base de datos conectada! :D");
    app.listen(3001, function () {
      console.log(`App is listening on port ${config.port}!`);
    });
  })
  .catch((err) => console.error(err));
