const db = require("../data/db");

let nextId = 1;

function createReservation(req, res) {
  const { roomId, date, startTime, endTime } = req.body;
  const user = req.user;

  if (!roomId || !date || !startTime || !endTime) {
    return res
      .status(400)
      .json({ error: "Os campos roomId, date, startTime e endTime são obrigatórios." });
  }

  const room = db.rooms.find((r) => r.id === roomId);
  if (!room) {
    return res.status(404).json({ error: "Sala não encontrada." });
  }

  // Validar formato mínimo e comparar startTime < endTime
  if (startTime >= endTime) {
    return res
      .status(400)
      .json({ error: "O horário de início deve ser anterior ao horário de término." });
  }

  // Validar se o agendamento não está no passado (date + startTime)
  const reservationStart = new Date(`${date}T${startTime}:00`);
  if (isNaN(reservationStart.getTime())) {
    return res.status(400).json({ error: "Data ou horário inválido." });
  }

  if (reservationStart < new Date()) {
    return res.status(400).json({ error: "Não é possível criar reservas no passado." });
  }

  const reservationEnd = new Date(`${date}T${endTime}:00`);

  // Verificar conflito: mesma sala, mesmo dia, sobreposição de horário
  const conflict = db.reservations.some((r) => {
    if (r.roomId !== roomId || r.date !== date) return false;
    const existingStart = new Date(`${r.date}T${r.startTime}:00`);
    const existingEnd = new Date(`${r.date}T${r.endTime}:00`);
    return reservationStart < existingEnd && reservationEnd > existingStart;
  });

  if (conflict) {
    return res.status(409).json({ error: "Sala reservada." });
  }

  const reservation = {
    id: nextId++,
    roomId,
    userId: user.id,
    date,
    startTime,
    endTime,
  };

  db.reservations.push(reservation);

  return res.status(201).json({
    id: reservation.id,
    room: room.name,
    responsible: user.name,
    date: reservation.date,
    startTime: reservation.startTime,
    endTime: reservation.endTime,
  });
}

module.exports = { createReservation };
