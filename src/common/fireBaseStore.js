import BookMarkerItem from './bookMarkerItem';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBna5qqyCXl0ozTj9_CrEOFXygThsjb8Fg",
    authDomain: "flickering-inferno-1056.firebaseapp.com",
    databaseURL: "https://flickering-inferno-1056.firebaseio.com",
    storageBucket: "flickering-inferno-1056.appspot.com",
    messagingSenderId: "865509601909"
};

class FireBaseStore {
    constructor() {
        firebase.initializeApp(config);
        this.database = firebase.database();
    }

    on = (ref, event, callback) => {
        firebase.database().ref(ref).on(event, r => callback(r.val()));
    };

    addItem = (phrase, handle)=> {
        const key = this.database.ref().child('book-marker').push().key;
        this.database.ref('book-marker/' + key).set(new BookMarkerItem(key, phrase))
            .then(() => {
                if (handle)
                    handle();
            });
    };

    removeItem = (key, handle)=> {
        this.database.ref('book-marker/' + key).remove()
            .then(() => {
                if (handle)
                    handle();
            });
    };


}
export default FireBaseStore;