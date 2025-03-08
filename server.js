const jsonServer = require("json-server");
const app = jsonServer.create();
const router = jsonServer.router("user.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5001; // Render will assign a dynamic port

app.use(middlewares);
app.use(router);

app.listen(PORT, () => {
  console.log(`Users API running on port ${PORT}`);
});
