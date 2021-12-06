require("dotenv").config({ path: "./config/.env" });

/**
 * Install TS Env Typings extension in vs code
 * Suggest typing for environment variables 🎉
 */

(() => {
  console.log("HOST_API_URL :>> ", process.env.HOST_API_URL);
  console.log("HOST_APP_URL :>> ", process.env.HOST_APP_URL);
})();
