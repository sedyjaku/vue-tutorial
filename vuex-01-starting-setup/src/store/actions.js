export default {
  login(context){
    context.commit('setLogged', {logged: true})
  },
  logout(context){
    context.commit('setLogged', {logged: false})
  }
}