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
  reservations: [],
};

module.exports = db;
