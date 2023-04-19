import { FrContext } from "@/context/context"
import { useContext } from "react"
import { useState } from "react"
import { client } from "@/lib/sanity"
  

const ActiveTripDisplay = () =>{
    const {currUser, activeTrips} = useContext(FrContext)

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
                    {trip.driverWallet}
                    {trip.passengerWallet} 
                  </button>
                </div>
                <div className="flex-grow"></div>
              </div>
              <div className="flex items-center ml-3">
                <p className="text-sm font-medium text-gray-500">

                </p>
                <p className="text-sm font-medium text-gray-500">

                </p>
                <p className="text-sm font-medium text-gray-500">

                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActiveTripDisplay