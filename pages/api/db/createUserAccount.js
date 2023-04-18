import { client } from "@/lib/sanity";

const createUserOnSanity = async(req,res)=> {

    try{
        const id = req.body.userWalletAddress;

        const userDoc = {
            _type: 'user',
            _id: id.slice(1),
            name: req.body.name,
            wallet: req.body.userWalletAddress,
            id: id.slice(1),
        }

        await client.createIfNotExists(userDoc).then( res.status(200).send({message: 'user doc was created' }))
        
       
    }catch(error){
        res.status(500).send({message:'error',data: error.message})
    }
}

export default createUserOnSanity