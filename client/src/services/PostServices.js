import ApiClient from './ApiClient'

export const __UploadPost = async (formData, userId) => {
    try{
        const res = await ApiClient.post(`/posts/create`, formData)
        return res.data
    }catch(error){
        throw error
    }
}

export const __GetPosts = async (poops) => {
    try{
        const res = await ApiClient.get('/posts/')
      return  res.data
    }catch(error){
        throw error
    }
}

export const __DeletePost = async (formData, userId) => {
    try{
        
    }catch(error){
        throw error
    }
}

// export const __Post = async (formData, userId) => {
//     try{}catch(error){
//         throw error
//     }
// }

// export const __Post = async (formData, userId) => {
//     try{}catch(error){
//         throw error
//     }
// }