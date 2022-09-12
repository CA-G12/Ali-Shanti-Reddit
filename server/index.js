const app = require("./app");

app.listen(app.get("port"), () => {
  console.log(`SERVER IS RUNNING IN http://localhost:${app.get("port")}`);
});
