import firebase from "./firebase.js";
import { message } from "antd";

export async function signIn() {
  try {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(googleProvider);
  } catch (error) {
    console.error(`Error code: ${error.code}. Error message: ${error.message}`);
  }
}

export function signOut() {
  try {
    firebase.auth().signOut();
  } catch (error) {
    console.error(`Error code: ${error.code}. Error message: ${error.message}`);
  }
}

export function warningPopup() {
  message.info("Whoops! You need to login first.");
}

export function getCurrentUser() {
  return firebase.auth().currentUser;
}
