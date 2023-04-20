import React from 'react'
import Rides from './Rides'
import { useContext } from 'react'
import { FrContext } from '@/context/context'
import { ethers } from 'ethers'

const style = {
    wrapper:`flex-1 h-full flex flex-col justify-between`,
    rideSelect:`h-full flex flex-col overflow-scroll`,
    confirmContainer:`border-t-2 cursor-pointer z-10`,
    button:`bg-purple-600 text-white m-4 py-4 text-center text-xl`,
}

const Confirm = () => {
    const{currAccount,pickup,dropoff,price,selectedRideType, pickupCoords, dropoffCoords, metamask} = useContext(FrContext)

    var userWallet

 

    const storeDetails = async (pickup,dropoff) => {
      try{
        await fetch('/api/db/saveTripDetails',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pickupLoc: pickup,
            dropoffLoc: dropoff,
            userWallet: currAccount,
            price: price,
            selectedRideType: selectedRideType,
          }),
        })

       

      }catch(error){
        console.error(error)
      }

    }

  return (
    <div className={style.wrapper}>
      <div className={style.rideSelect}>
       {pickupCoords && dropoffCoords && <Rides/>}
      </div>
      <div className={style.confirmContainer}>
        <div className={style.confirmContainer}>
            <div 
            className={style.button}
            onClick={()=>{
              storeDetails(pickup,dropoff)
               console.log(price)}}
            >Confirm {selectedRideType.name}</div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
