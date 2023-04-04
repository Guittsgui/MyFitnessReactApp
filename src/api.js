export const api = {

    getAllUsers: async ()=>{

      const response = await fetch ('http://localhost:3000/')
      const json = await response.json()
      return json
    },

    addNewUser: async (user)=>{
        const response = await fetch('http://localhost:3000/user', {
            method:'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          const json = await response.json()
          return [json, response]
    },



    validateUserLogin: async(loginData)=>{
      const response = await fetch('http://localhost:3000/login',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })
      const json = await response.json()
      return json
    },

    getUserByID: async(id)=>{
      const response = await fetch(`http://localhost:3000/user/${id}`)
      const json = await response.json()
      return json
    }



}