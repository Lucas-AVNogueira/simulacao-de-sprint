const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Simulação de Sprint API",
      version: "1.0.0",
      description: "API de gerenciamento de reservas de salas",
    },
    components: {
      securitySchemes: {
        userIdHeader: {
          type: "apiKey",
          in: "header",
          name: "x-user-id",
          description: "ID do usuário retornado no login",
        },
      },
      schemas: {
        Error: {
          type: "object",
          properties: {
            error: { type: "string", example: "Mensagem de erro" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

module.exports = swaggerJsdoc(options);
