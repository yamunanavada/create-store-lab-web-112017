export default function manageUsers(state = {users: []}, action){
  switch (action.type) {
    case 'ADD_USER':
    let users= state.users.concat(action.payload)
    console.log(action)
    console.log(users)
      return Object.assign({}, state, {users: users})
    default:
      return state;
  }
}
