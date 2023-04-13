import { client } from "@/lib/sanity";

const saveTripDetails = async (req,res) => {
    try{
        const tripDoc = {
            _type: 'trip',
            _id: `${req.body.userWallet}-${Date.now()}`,
            pickup: req.body.pickupLoc,
            dropoff: req.body.dropoffLoc,
            rideTime: new Date(Date.now()).toISOString(),
            price: parseFloat(req.body.price),
            rideType: req.body.selectedRideType.name,
            passenger:{
                _key: `passenger-${req.body.userWallet} - ${new Date(
                    Date.now(),
                ).toISOString()}`,
                _ref: req.body.userWallet.slice(1),
                _type: 'reference',
            },
        }

        await client.create(tripDoc).then(res.status(200).send({message: 'success'}))
    }catch(error){
        req.status(500).send({message: 'error', data: error.message})
    }
}

export default saveTripDetails