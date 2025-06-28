# Webhook WhatsApp Auto Responder

Este es un pequeño servidor Express que responde a mensajes entrantes desde apps como WhatsAuto.

## Uso

1. Sube a GitHub.
2. Despliega en [https://render.com](https://render.com).
3. Usa la URL: `https://tudominio.onrender.com/message`

## JSON esperado:

```json
{
  "app": "WhatsAuto",
  "sender": "Nombre",
  "message": "Texto",
  "group_name": "Grupo (si aplica)",
  "phone": "Número"
}
```

## Respuesta:

```json
{
  "reply": "Hola [nombre], recibimos tu mensaje: [mensaje]"
}
```
