import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

const connectSignalR = async (onMessageReceived) => {
  const connection = new HubConnectionBuilder()
    .withUrl("http://192.168.2.7:5002/notificationHub")
    .configureLogging(LogLevel.Information)
    .withAutomaticReconnect()
    .build();

  try {
    await connection.start();
    console.log("✅ Conectado a SignalR");

    // Escuchar mensajes del servidor
    connection.on("ReceiveMessage", (message) => {
      console.log(`recibido: ${message}`);
      if (onMessageReceived) {

        onMessageReceived({message });
      }
    });
  } catch (err) {
    console.error("❌ Error al conectar con SignalR:", err);
  }

  return connection;
};

export default connectSignalR;
