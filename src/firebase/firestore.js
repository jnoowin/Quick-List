import firebase from "./firebase";

export async function insertUser(user) {
  return await firebase.firestore().doc(`users/${user.uid}`).set({ todos: [] });
}

export async function getUserData(uid) {
  return await firebase.firestore().doc(`users/${uid}`).get();
}

export async function updateDoc(path, value) {
  await firebase.firestore().doc(`users/${path}`).set(value);
}
