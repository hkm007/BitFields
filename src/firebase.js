import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import { v4 as uuidv4 } from 'uuid';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "**********",
    authDomain: "**********",
    databaseURL: "**********",
    projectId: "**********",
    storageBucket: "**********",
    messagingSenderId: "**********",
    appId: "**********"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    isInit() {
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve);
        })
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        this.auth.signOut();
    }

    isAdmin() {
        return this.auth.currentUser;
    }

    postData(title, content) {
        return this.db.collection('posts').add({
            title,
            content,
            publishedOn: new Date(),
            postId: uuidv4()
        })
    }

    getData() {
        return this.db.collection("posts").get();
    }

    getPost(postId) {
        return this.db.collection("posts").where("postId", "==", postId).get();
    }
}

export default new Firebase();