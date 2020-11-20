import ApiClient from './ApiClient'

export const __UploadPost = async (formData, user_id) => {
    try{
        const res = await ApiClient.post(`/posts/${user_id}`, formData)
        return res.data
    }catch(error){
        throw error
    }
}

export const __GetPosts = async (page, limit) => {
    try{
        const res = await ApiClient.get(
            `/posts?page=${page || 1}&limit=${limit || 10}`
          )
        console.log(res.data)
        return  res.data
    }catch(error){
        throw error
    }
}


export const __DeletePost = async (post_id) => {
    try{
        const res = await ApiClient.delete(`/posts/${post_id}?active=true`)
        return res
    }catch(error){
        throw error
    }
}



export const __UpdatePosts = async (formData, post_id) => {
    try{
        const res = await ApiClient.put(`/posts/update`, formData)
        return res.data
    }catch(error){
        throw error
    }
}

// export const __Post = async (formData, userId) => {
//     try{}catch(error){
//         throw error
//     }
// }