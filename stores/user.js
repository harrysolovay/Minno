import { observable, action, computed } from 'mobx'
import { Facebook } from 'expo'
// import { LoginManager, AccessToken } from 'react-native-fbsdk'
import * as firebase from 'firebase'
import 'firebase/firestore'

const FACEBOOK_APP_ID = '216348378931084'
const FACEBOOK_LOGIN_PERMISSIONS = [ 'public_profile', 'user_friends' ]

class UserStore {

  // loaded the following observables
  @observable loaded = false

  // reference to all user documents in firestore
  @observable usersRef = firebase.firestore().collection('users')

  @observable user = null
  @observable isNewUser = true
  @observable launchToCapture = false
  @observable accessToken
  @observable userRef

  constructor() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        // save firebase user data
        this.user = user
        // save firestore user ref
        this.userRef = this.usersRef.doc(user.uid)
        // get firestore user data snapshot
        this.userRef.get().then((snapshot) => {
          if(snapshot.exists) {
            let userData = snapshot.data()
            // store whether user has completed registration
            this.isNewUser = userData.isNewUser
            // store whether should launch to capture screens
            this.launchToCapture = userData.launchToCapture
            // if user already exists, update data
            this.userRef.update({
              facebookId : user.providerData[0].uid
            }).then(() => {
              this.loaded = true
            })
          } else {
            // if user doesn't exist, set data
            this.userRef.set({
              facebookId : user.providerData[0].uid,
              isNewUser : true,
              launchToCapture : false
            }).then(() => {
              this.loaded = true
            })
          }
        })
      } else {
        this.user = this.accessToken = this.userRef = null
        this.isNewUser = true
        this.loaded = true
      }
    })
  }



  @action async logInWithFacebook() {

    const { type, token } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
      permissions : FACEBOOK_LOGIN_PERMISSIONS
    })

    if(type === 'success') {
      this.accessToken = token
      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      return firebase.auth().signInWithCredential(credential)
        .catch((error) => {
          console.error('failed to use Facebook access token to log in with firebase : ', error)
        })
    } else {
      console.log('failed to retrieve Facebook access token... user potentially quite')
    }

  }

  @action logInAsGuest() {
    console.log('logging in as guest')
  }

  @action logOut() {
    return firebase.auth().signOut()
  }

  @action saveNameAndHandle(name, handle) {
    return this.userRef.update({
      name : name,
      handle : handle
    })
  }

  @action saveAsBeingNoLongerNew() {
    this.isNewUser = false
    return this.userRef.update({
      isNewUser : false
    })
  }

}

export default new UserStore()
