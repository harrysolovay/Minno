import * as firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'

class FirebaseStore extends MobxFirebaseStore {

    constructor() {
      firebase.initializeApp({
        apiKey : 'AIzaSyC9qOIGWNBlgEuxwXCpxObtB24ZiGPc_F4',
        authDomain : 'chatapptest-fc7f4.firebaseapp.com',
        databaseURL : 'https://chatapptest-fc7f4.firebaseio.com',
        projectId : 'chatapptest-fc7f4',
        storageBucket : 'chatapptest-fc7f4.appspot.com',
        messagingSenderId : '541823215131'
      })
      super(firebase.database().ref())
    }

}

export default new FirebaseStore()
