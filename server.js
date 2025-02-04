const mongoose = require("mongoose");
const app = require("./app");

// Tworzenie połączenia z MongoDB
const DB_HOST = "mongodb+srv://admin:Kamil2009@cluster0.wk2zx.mongodb.net/"; // Użyj swojego URI MongoDB

mongoose
  .connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connection successful"); // Wyświetlenie wiadomości o sukcesie połączenia
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(`Database connection error: ${error.message}`); // Obsługa błędu połączenia
    process.exit(1); // Zakończenie procesu w przypadku błędu
  });
