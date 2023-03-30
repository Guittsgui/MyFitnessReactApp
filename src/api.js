export const api = {

    addNewUser: async (user)=>{
        const response = await fetch('http://localhost:3000/user', {
            method:'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          const json = await response.json()
          return json
    }

    

}