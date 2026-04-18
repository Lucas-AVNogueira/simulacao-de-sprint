const { Router } = require("express");
const { login } = require("../controllers/authController");
const authMiddleware = require("../middlewares/auth");
const { deleteReserva } = require("../controllers/cancelarReservaController");

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

/**
 * @openapi
 * /api/reservas/{id}:
 *   delete:
 *     summary: Cancelar uma reserva
 *     description: |
 *       Apenas o funcionário que criou a reserva pode cancelá-la.
 *       O usuário deve estar autenticado.
 *       Ao cancelar, a sala fica imediatamente disponível para novos agendamentos.
 *     tags:
 *       - Reservas
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da reserva a ser cancelada
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Reserva cancelada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Reserva cancelada com sucesso
 *                 reservaId:
 *                   type: integer
 *                   example: 1
 *       401:
 *         description: Usuário não autenticado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Usuário não tem permissão para cancelar esta reserva
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Reserva não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete("/reservas/:id", authMiddleware,deleteReserva);

router.use("/reservations", require("./reservationRoutes"));

module.exports = { router, authMiddleware };
