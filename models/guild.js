const mongoose = require("mongoose");

const guildSchema = new mongoose.Schema({
  guildId: { type: String, required: true, unique: true }, // ID serwera Discord
  logChannelId: { type: String, required: false }, // Opcjonalny kanał logów
});

module.exports = mongoose.model("Guild", guildSchema);
