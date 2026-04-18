const db = require("../data/db");

function authMiddleware(req, res, next) {
  const userId = req.headers["x-user-id"];
  console.log(req)

  if (!userId) {
    return res.status(401).json({ error: "Autenticação necessária." });
  }

  const user = db.users.find((u) => u.id === userId);

  if (!user) {
    return res.status(401).json({ error: "Usuário não autorizado." });
  }

  req.user = user;
  next();
}

module.exports = authMiddleware;
