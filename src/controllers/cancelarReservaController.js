const reservas = require("../data/db").reservations; // Importa as reservas do banco de dados

function deleteReserva(req, res) {
  const reservaId = parseInt(req.params.id);
  const reservaIndex = reservas.findIndex(r => r.id === reservaId);
  const userId = req.user.id; 
  
  // Reserva não encontrada
  if (reservaIndex === -1) {
    return res.status(404).json({ error: 'Reserva não encontrada' });
  }

  const reserva = reservas[reservaIndex];

  // Verifica se o usuário é o dono da reserva
  if (reserva.userId !== userId) {
    return res.status(403).json({ error: 'Você não pode cancelar esta reserva' });
  }

  // Remove a reserva (libera a sala)
  reservas.splice(reservaIndex, 1);

  return res.json({
    message: 'Reserva cancelada com sucesso',
    reservaId: reservaId
  });
};

module.exports = { deleteReserva };