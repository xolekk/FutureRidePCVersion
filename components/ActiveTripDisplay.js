import { FrContext } from "@/context/context"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { client } from "@/lib/sanity"
  

const ActiveTripDisplay = () =>{
    const {currUser, activeTrips, metamask, currAccount} = useContext(FrContext)
     const [selectedTrip, setSelectedTrip] = useState(null);

     var isDriver

  const handleTripSelect = (index) => {
    setSelectedTrip(index);
    
  };

  useEffect(()=>{
    if(!activeTrips[selectedTrip]) return
    console.log(activeTrips[selectedTrip].driverWallet)
    if(currAccount === activeTrips[selectedTrip].driverWallet){
      isDriver = true 
    }else{
      isDriver = false
    }
  },[selectedTrip])

  const proccessPayment = async () =>{
    if(isDriver === false){
    try{
      await metamask.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: currAccount,
              to: activeTrips[selectedTrip].driverWallet,
              gas: '0x7EF40',
              value: Number(activeTrips[selectedTrip].price * 1e18).toString(16),
            },
          ],
        })
    }catch(error){
      console.error(error)
    }
    }else{
      console.log('Transaction requested!')
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ul className="w-full max-w-lg divide-y divide-purple-200">
        {activeTrips.map((trip, index) => (
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
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedTrip !== null && (
        <button 
        className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        onClick={()=>{proccessPayment()}}
        >
          Trip Completed
        </button>
      )}
    </div>
  );
}

export default ActiveTripDisplay