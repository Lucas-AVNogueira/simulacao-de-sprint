const { Router } = require("express");
const authMiddleware = require("../middlewares/auth");
const { createReservation } = require("../controllers/reservationController");

const router = Router();

/**
 * @openapi
 * /api/reservations:
 *   post:
 *     summary: Reservar uma sala de reunião
 *     tags:
 *       - Reservations
 *     security:
 *       - userIdHeader: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - roomId
 *               - date
 *               - startTime
 *               - endTime
 *             properties:
 *               roomId:
 *                 type: integer
 *                 example: 1
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2026-04-20"
 *               startTime:
 *                 type: string
 *                 example: "09:00"
 *               endTime:
 *                 type: string
 *                 example: "10:00"
 *     responses:
 *       201:
 *         description: Reserva criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 room:
 *                   type: string
 *                   example: Sala A
 *                 responsible:
 *                   type: string
 *                   example: Alice Silva
 *                 date:
 *                   type: string
 *                   example: "2026-04-20"
 *                 startTime:
 *                   type: string
 *                   example: "09:00"
 *                 endTime:
 *                   type: string
 *                   example: "10:00"
 *       400:
 *         description: Dados inválidos ou horário no passado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Autenticação necessária
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Sala não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       409:
 *         description: Sala reservada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post("/", authMiddleware, createReservation);

module.exports = router;
