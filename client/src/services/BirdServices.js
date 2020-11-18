import ApiCLient from './ApiClient'

export const __UploadBird = async (formData) => {
    try{
        const res = await ApiCLient.post(`/birds/create`, formData)
        return res.data
    }catch(error){
        throw error
    }
}

export const __GetBirdsById = async (bird_id) => {
    
    try{
        const res = await ApiCLient.get(`/bird/${bird_id}`)
        console.log(res.data)
        return res.data
    }catch(error){
        throw error
    }
}

export const __UpdateBird = async (bird_id, formData ) => {
    try{
        const res = await ApiCLient.put(`/birds/${bird_id}`, formData)
        return res.data
    } catch(error){
        throw error
    }
}


export const __GetAllBirds = async () => {
    try {
        const res = await ApiCLient.get(`/birds/`)
        console.log(res.data)
        return res.data
        console.log(res.data, "shit")
    } catch(error){
        throw  error 
    }
}
