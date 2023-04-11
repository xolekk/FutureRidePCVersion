import { client } from "@/lib/sanity";

const createUserInSanity = async(req,res)=> {
    try{
        const userDoc = {
            _type: 'user',
            _id: req.body.userWalletAdress,
            name: req.body.name,
            wallet: req.body.userWalletAdress,
        }

        await client.createIfNotExists(userDoc)
        
        res.status(200).send({message: 'success' })
    }catch(error){
        res.status(500).send({message:'error',data: error.message})
    }
}

export default createUserInSanity