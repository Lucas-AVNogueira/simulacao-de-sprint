const db = {
  users: [
    { id: "u1", login: "alice", password: "senha123", name: "Alice Silva" },
    { id: "u2", login: "bob", password: "senha456", name: "Bob Souza" },
  ],
  rooms: [
    { id: "r1", name: "Sala A" },
    { id: "r2", name: "Sala B" },
    { id: "r3", name: "Sala C" },
  ],
  reservations: [
  ],
};

db.reservations.push(
    { id: 1, sala: db.rooms[0].id, userId: "u1" },
    { id: 2, sala: db.rooms[1].id, userId: "u1" },
    { id: 3, sala: db.rooms[2].id, userId: "u1" },
);

console.log(db.reservations)
module.exports = db;
