const { db } = require("../config/firebase");
const USERS_COLLECTION = "users";

const User = {
  async createUser(userData) {
    const docRef = await db.collection(USERS_COLLECTION).add(userData);
    return { id: docRef.id, ...userData };
  },

  async getUserById(userId) {
    const doc = await db.collection(USERS_COLLECTION).doc(userId).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() };
  },

  async getAllUsers() {
    const snapshot = await db.collection(USERS_COLLECTION).get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },

  async updateUser(userId, updateData) {
    await db.collection(USERS_COLLECTION).doc(userId).update(updateData);
    return this.getUserById(userId);
  },

  async deleteUser(userId) {
    await db.collection(USERS_COLLECTION).doc(userId).delete();
    return true;
  },
};

module.exports = User;
