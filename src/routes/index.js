const { Router } = require("express");
const { login } = require("../controllers/authController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

// US-01 — Login (sem autenticação)
router.post("/login", login);

// Exemplo de rota protegida — outros devs adicionam suas rotas aqui
// Padrão: router.use("/recurso", authMiddleware, require("./recursoRoutes"));

module.exports = { router, authMiddleware };
