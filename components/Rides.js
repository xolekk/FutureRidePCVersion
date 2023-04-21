import { FrContext } from '@/context/context';
import React, { useContext, useEffect, useState } from 'react'

const style = {
    car:`flex p-3 m-2 items-center border-2 border-white`,
    selected: `border-2 border-black flex p-3 m-2 items-center`,
}

const base = 1542;

const Rides = () => {
  const[carList,setCarList] = useState([])
  const{selectedRideType, setSelectedRideType, setPrice, basePrice, pickupCoords, dropoffCoords} = useContext(FrContext)


useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('/api/db/getRide')

        const data = await response.json()
        setCarList(data.data)
        setSelectedRideType(data.data[0])
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className="h-full flex flex-col">
        <div className="text-gray-500 text-center text-xs py-2 border-b">Choose a ride, or swipe up for more</div>
        <div className="flex flex-col flex-1 overflow-scroll">
            {carList.map((car, index)=>(
                <div 
                key={index}
                className={`${
                  selectedRideType.name === car.name
                  ? style.selected
                  : style.car
                }`}
                onClick={()=>{
                  setSelectedRideType(car)
                  setPrice(((basePrice/10**5)*5*car.price).toFixed(5))
                }}
                >
                    <div className="ml-2 flex-1">
                        <div className="font-medium">{car.name}</div>
                        <div className="text-xs text-purple-500">5 min away</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-[-0.8rem]">{((basePrice/10**5)*5*car.price).toFixed(5)}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Rides
