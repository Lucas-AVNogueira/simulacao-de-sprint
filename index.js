const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/swagger");
const { router } = require("./src/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", router);
app.use("/docs", ...swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Swagger UI em    http://localhost:${PORT}/docs`);
});
