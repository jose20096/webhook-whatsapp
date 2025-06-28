const express = require("express");
const app = express();

app.use(express.json());

app.post("/message", (req, res) => {
  const { app: appName, sender, message, group_name, phone } = req.body;

  console.log("Mensaje recibido:");
  console.log(`App: ${appName}`);
  console.log(`Remitente: ${sender}`);
  console.log(`Mensaje: ${message}`);
  console.log(`Grupo: ${group_name}`);
  console.log(`Teléfono: ${phone}`);

  res.json({
    reply: `Hola ${sender}, recibimos tu mensaje: ${message}`
  });
});

app.get("/", (req, res) => {
  res.send("Servidor WhatsApp Webhook activo ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor activo en puerto ${PORT}`);
});
