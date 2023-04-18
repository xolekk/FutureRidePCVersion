import { client } from "@/lib/sanity";

const createActiveTrips = async (req,res) => {
    try{
        const activeTrip = {
            _type: 'activeTrip',
            pickup: req.body.pickupLoc,
            dropoff: req.body.dropoffLoc,
            price: parseFloat(req.body.price),
            rideType: req.body.rideType,
            passengerWallet: req.body.passengerWallet,
            driverWallet: req.body.driverWallet,
        }

        await client.create(activeTrip).then(res.status(200).send({message: 'success'}))
    }catch(error){
        req.status(500).send({message: 'error', data: error.message})
    }
}

export default createActiveTrips