const { Router } = require("express");
const { login } = require("../controllers/authController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

/**
 * @openapi
 * /api/login:
 *   post:
 *     summary: Autenticação de usuário
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - login
 *               - password
 *             properties:
 *               login:
 *                 type: string
 *                 example: alice
 *               password:
 *                 type: string
 *                 example: senha123
 *     responses:
 *       200:
 *         description: Acesso liberado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: acesso liberado
 *                 userId:
 *                   type: string
 *                   example: u1
 *       400:
 *         description: Login e senha são obrigatórios
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Credenciais inválidas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post("/login", login);

// Exemplo de rota protegida — outros devs adicionam suas rotas aqui
// Padrão: router.use("/recurso", authMiddleware, require("./recursoRoutes"));

module.exports = { router, authMiddleware };
