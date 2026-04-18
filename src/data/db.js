const db = {
  users: [
    { id: 1, login: "alice", password: "senha123", name: "Alice Silva" },
    { id: 2, login: "bob", password: "senha456", name: "Bob Souza" },
  ],
  rooms: [
    { id: 1, name: "Sala A" },
    { id: 2, name: "Sala B" },
    { id: 3, name: "Sala C" },
  ],
  reservations: [
  ],
};

db.reservations.push(
    { id: 1, sala: db.rooms[0].id, userId: 1 },
    { id: 2, sala: db.rooms[1].id, userId: 1 },
    { id: 3, sala: db.rooms[2].id, userId: 1 },
);

console.log(db.reservations)
module.exports = db;
