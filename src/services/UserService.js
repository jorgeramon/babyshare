import firebase from 'firebase';

class UserService {

  register({ username, email, password }) {
    firebase.auth().createUserWithEmailAndPassword(email, password);

    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged( async (state) => {
        if (state) {
          state.sendEmailVerification();

          await firebase
            .firestore()
            .collection('users')
            .doc(state.uid)
            .set({ username, email });

          resolve(state.uid);
        }
      });
    });
  }

  login({ email, password }) {
    firebase.auth().signInWithEmailAndPassword(email, password);

    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(state => {
        if (state) {

          if (!state.emailVerified) {
            state.sendEmailVerification();
            return reject('not-verified');
          }

          resolve(state.uid);
        }
      });
    });
  }
}

export default new UserService();
