export const getMemes = async ()=>{
    const response = await fetch('https://api.imgflip.com/get_memes',{method:"GET"})
    return response.json()
}