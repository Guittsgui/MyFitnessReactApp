export const api = {

    getAllUsers: ()=>{

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

    validateUserLogin: async(user)=>{
      const response = await fetch('http://localhost:3000/login',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      const json = await response.json()
      return [json,response]
    }



}