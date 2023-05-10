const db = require("../services/db");

class SingleMemory {
  // User ID
  noteId;
  // Memory date
  memory;

  constructor(noteId) {
    this.noteId = noteId;
  }

  // Gets the memories from the database
  async getMemory() {
    if (typeof this.memory !== "string") {
      let sql = "SELECT * from Memorys where noteId = ?";
      const results = await db.query(sql, [this.noteId]);
      this.memory = results;
    }
  }
}

module.exports = {
  SingleMemory,
};
