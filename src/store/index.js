import { createStore } from 'vuex'


//firebase imports
import { auth } from '@/firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'


const store = createStore({
  state: {
    user: null,
    authIsReady: false,
    Approved: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload
    },
    changed(state, payload) {
      state.Approved =  payload;
    }
  },
  getters: {
    finalChange(state) {
      return state.Approved;
    },
  },
  actions: {
    async signup (context, {email, password}) {
      console.log('signup action')
      //async code
      const res = await createUserWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user);
      }
      else
      {
        throw new Error('could not complete signup')
      }
    },

    async login(context, { email, password }) {
      console.log('login action')
      //async code
      const res = await signInWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could not complete login')
        // alert(Error.message)
      }
    },

    async logout(context) {
      console.log('logout action')

      await signOut(auth)
      context.commit('setUser', null)
    },

    changed(context, payload) {
      context.commit('changed', payload)
    }

  },
  modules: {
  },
})




//wait until auth is ready
const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true)
  store.commit('setUser', user)
  store.commit('changed', true)
  unsub()
})


// export the store
export default store

