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
    },

    addNewDiet: async(diet)=>{
      const response = await fetch ('http://localhost:3000/diet',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(diet)
      })
      const json = await response.json()
      return json
    },

    getDietByUserId: async(id)=>{
      const response = await fetch (`http://localhost:3000/diet/${id}`)
      const json = await response.json()
      return json
    },

    addNewPost: async(post)=>{
      const response = await fetch('http://localhost:3000/post',{
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify(post)
      })
      const json = await response.json()
      return json
    },

    getAllPosts: async()=>{
      const response = await fetch('http://localhost:3000/post')
      const json = await response.json()
      return json
    },

    getPostById: async(id)=>{
      const response = await fetch(`http://localhost:3000/post/${id}`)
      const json =  await response.json()
      return json
    },

    addNewComment: async(comment)=>{
      const response = await fetch('http://localhost:3000/comment',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(comment)
      })
      const json = await response.json()
      return json
    },
    
    getCommentsByPostId: async(id)=>{
      const response = await fetch (`http://localhost:3000/comment/${id}`)
      const json = await response.json()
      return json
    },

    deleteComment: async(comment)=>{
      const response = await fetch(`http://localhost:3000/comment`, 
      {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify(comment)
      })
      const json = await response.json()
      return json
    }


}