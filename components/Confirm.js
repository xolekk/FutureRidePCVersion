import React from 'react'
import Rides from './Rides'
import { useContext, useEffect } from 'react'
import { FrContext } from '@/context/context'
import { ethers } from 'ethers'

const Confirm = () => {
    const{currAccount,pickup,dropoff,price,selectedRideType, pickupCoords, dropoffCoords, metamask} = useContext(FrContext)

    const Web3 = require("web3")
    var correctBalance = undefined
    web3 = new Web3(window.ethereum)
    web3.eth.getBalance(currAccount, function(err,balance){
      console.log(balance/1000000000000000000)
      correctBalance = balance/1000000000000000000
    })
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
    <div className="flex-1 h-full flex flex-col justify-between">
      <div className="h-full flex flex-col overflow-scroll">
       {pickupCoords && dropoffCoords && <Rides/>}
      </div>
      <div className="border-t-2 cursor-pointer z-10">
        <div className="`border-t-2 cursor-pointer z-10">
            <div 
            className="bg-purple-600 text-white m-4 py-4 text-center text-xl"
            onClick={()=>{
              if(price<correctBalance){
              storeDetails(pickup,dropoff)
               console.log(price)
              }else{
                console.log('Not enough money')
              }}}
            >Confirm {selectedRideType.name}</div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
