export const addUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
}

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user')
//   console.log("result=====",result); //show the User Register data
  const user = result ? JSON.parse(result) : null
//   console.log("user=====",user);
  return user
}
