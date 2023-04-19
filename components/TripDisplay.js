import { FrContext } from "@/context/context"
import { useContext } from "react"
import { useState } from "react"
import { client } from "@/lib/sanity"
  

const TripDisplay = () =>{
    const {tripReq,currUser} = useContext(FrContext)
    const [selectedTrip, setSelectedTrip] = useState(null);


  const handleTripSelect = (index) => {
    setSelectedTrip(index);
  };

const createActiveTrip = async () =>{
  
    try{
      await fetch('./api/db/createActiveTrip',{
        method:'Post',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pickupLoc: tripReq[selectedTrip].pickup,
          dropoffLoc: tripReq[selectedTrip].dropoff,
          price: tripReq[selectedTrip].price,
          rideType: tripReq[selectedTrip].rideType,
          passengerWallet: tripReq[selectedTrip].passenger.wallet,
          driverWallet: currUser.wallet,
        }),
      })
    }catch(error){
      console.error(error)
    }
  }

  const deleteFromTripList = async () =>{
    const query = `*[_type == "trip"][${selectedTrip}]._id`
    const sanityResponse = await client.fetch(query)
    try{
    client.delete(sanityResponse)
    }catch(error){
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ul className="w-full max-w-lg divide-y divide-purple-200">
        {tripReq.map((trip, index) => (
          <li key={index} className="py-4">
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="ml-3">
                  <button
                    className={`text-base font-medium ${
                      selectedTrip === index
                        ? "text-purple-600"
                        : "text-gray-900"
                    }`}
                    onClick={() => handleTripSelect(index)}
                  >
                    {trip.pickup} - {trip.dropoff}
                  </button>
                </div>
                <div className="flex-grow"></div>
              </div>
              <div className="flex items-center ml-3">
                <p className="text-sm font-medium text-gray-500">
                  Price: {trip.price}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  Type: {trip.rideType}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  User: {trip.passenger.wallet}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedTrip !== null && (
        <button 
        className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        onClick={()=>{createActiveTrip()}}
        >
          Confirm Selection
        </button>
      )}
    </div>
  );
}

export default TripDisplay