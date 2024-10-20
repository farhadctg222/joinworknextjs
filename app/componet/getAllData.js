export const  getAllData = async()=>{
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/data`,{next:{
        revalidate:10
    }})
    return result.json()
}