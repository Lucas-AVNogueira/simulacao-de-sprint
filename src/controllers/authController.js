const db = require("../data/db");

function login(req, res) {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({ error: "Login e senha são obrigatórios." });
  }

  const user = db.users.find(
    (u) => u.login === login && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Credenciais inválidas." });
  }

  return res.status(200).json({ message: "acesso liberado", userId: user.id });
}

module.exports = { login };
