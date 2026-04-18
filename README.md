# Simulação de Sprint

Projeto desenvolvido na Dinâmica de Simulação de uma Sprint Ágil — Time A.

A aplicação é uma **API REST interna** para gerenciamento de reservas de salas de reunião.

---

## Tecnologias

- Node.js
- Express
- Swagger UI (`/docs`)

---

## Como executar

```bash
npm install
npm start
```

A API ficará disponível em `http://localhost:3000`.
Documentação Swagger em `http://localhost:3000/docs`.

---

## Endpoints

### Autenticação

| Método | Rota         | Descrição                  |
|--------|--------------|----------------------------|
| POST   | /api/login   | Autentica o usuário        |

**Body:**
```json
{
  "login": "alice",
  "password": "senha123"
}
```

**Resposta:**
```json
{
  "message": "acesso liberado",
  "userId": 1
}
```

---

### Reservas

| Método | Rota                    | Descrição                        | Auth |
|--------|-------------------------|----------------------------------|------|
| POST   | /api/reservations       | Criar uma reserva de sala        | Sim  |
| DELETE | /api/reservas/:id       | Cancelar uma reserva             | Sim  |

> Autenticação via header `x-user-id` com o ID inteiro do usuário.

**POST /api/reservations — Body:**
```json
{
  "roomId": 1,
  "date": "2026-04-20",
  "startTime": "09:00",
  "endTime": "10:00"
}
```

---

## Usuários de teste

| ID | Login | Senha     |
|----|-------|-----------|
| 1  | alice | senha123  |
| 2  | bob   | senha456  |

## Salas disponíveis

| ID | Nome   |
|----|--------|
| 1  | Sala A |
| 2  | Sala B |
| 3  | Sala C |

