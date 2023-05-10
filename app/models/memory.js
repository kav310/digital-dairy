const db = require("../services/db");

class Memory {
  // User ID
  id;
  // Memory date
  data;

  constructor(id) {
    this.id = id;
  }

  // Gets the memories from the database
  async getMemories() {
    if (typeof this.data !== "string") {
      let sql = "SELECT * from Memorys where id = ?";
      const results = await db.query(sql, [this.id]);
      this.data = results;
    }
  }

  async getMemory() {
    let sql = "SELECT * from Memorys where noteId = ?";
    const results = await db.query(sql, [this.noteId]);
    this.singleMemory = results;
  }
}

module.exports = {
  Memory,
};