import { FrContext } from "@/context/context"
import { useContext } from "react"
import { useState } from "react"

const style={

}

const TripDisplay = () =>{
    const {tripReq} = useContext(FrContext)
    const [selectedTrip, setSelectedTrip] = useState(null);

  const handleTripSelect = (index) => {
    setSelectedTrip(index);
  };

  return (
    <div class="flex flex-col justify-center items-center h-screen">
      <ul class="w-full max-w-lg divide-y divide-purple-200">
        {tripReq.map((trip, index) => (
          <li key={index} class="py-4">
            <div class="flex flex-col">
              <div class="flex items-center">
                <div class="ml-3">
                  <button
                    class={`text-base font-medium ${
                      selectedTrip === index
                        ? "text-purple-600"
                        : "text-gray-900"
                    }`}
                    onClick={() => handleTripSelect(index)}
                  >
                    {trip.pickup} - {trip.dropoff}
                  </button>
                </div>
                <div class="flex-grow"></div>
              </div>
              <div class="flex items-center ml-3">
                <p class="text-sm font-medium text-gray-500">
                  Price: {trip.price} Type: {trip.rideType}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedTrip !== null && (
        <button class="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
          Confirm Selection
        </button>
      )}
    </div>
  );
}

export default TripDisplay