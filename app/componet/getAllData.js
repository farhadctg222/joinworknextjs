export const  getAllData = async()=>{
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/data`,{next:{
        revalidate:10
    }})
    return result.json()
}
export const  postData = async()=>{
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/post`,{next:{
        revalidate:10
    }})
    return result.json()
}