const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Webhook de WhatsApp activo");
});

app.post("/message", (req, res) => {
  const { app: appName, sender, message } = req.body;

  console.log(`📥 Mensaje recibido:`);
  console.log(`🟢 App: ${appName}`);
  console.log(`👤 Remitente: ${sender}`);
  console.log(`💬 Mensaje: ${message}`);

  res.status(200).json({ status: "recibido" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});