import { client } from "@/lib/sanity";

const getUserAccount = async (req,res) => {
   try{
    const query = `
    *[_type == "user" && Wallet=="${req.query.wallet}"]{
        name,
        Wallet,
        "imageUrl": profileImage.asset->url
    }
    `

    const sanityResponse = await client.fetch(query)

    res.status(200).send({message: 'success',data: sanityResponse[0]})
}catch(error){
    res.status(500).send({message: 'error', data: error.message})
}
}

export default getUserAccount