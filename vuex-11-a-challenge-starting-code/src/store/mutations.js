const rootMutation = {
  setLogged(state, payload){
    state.logged = payload.logged;
  }
}

export default rootMutation;