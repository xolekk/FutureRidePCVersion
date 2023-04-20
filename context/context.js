import { createContext,useState,useEffect } from "react";
import {faker} from '@faker-js/faker'

export const FrContext = createContext()

export const FrProvider = ({children}) => {
    const[pickup,setPickup] = useState('')
    const[dropoff,setDropoff] = useState('')
    const [pickupCoords,setPickupCoords] = useState()
    const[dropoffCoords,setDropoffCoords] = useState()
    const[currAccount, setCurrAccount] = useState()
    const[currUser, setCurrUser] = useState([])
    const[selectedRideType, setSelectedRideType] = useState([])
    const[price,setPrice] = useState()
    const [basePrice, setBasePrice] = useState()
    const [tripReq, setTripReq] = useState([])
    const [activeTrips, setActiveTrips] = useState([])
    const [isDriver,setIsDriver] = useState('')

    let metamask

    if(typeof window !== 'undefined'){
        metamask = window.ethereum
    }

    useEffect(()=>{
        isWalletConnected()

    }, [])

    useEffect(()=>{
        if(!currAccount) return
        requestCurrUsersInfo(currAccount)
        
    }, [currAccount])

    useEffect(()=>{
        if(!currAccount) return
        requestCurrUserActiveTrips(currAccount)
        console.log(activeTrips)
    },[currAccount])
    useEffect(()=>{
        if(!currAccount) return
        requestCurrUserActiveTripsDriver(currAccount)
        console.log(activeTrips)
    },[currAccount])

   useEffect(() => {
    if (!pickupCoords || !dropoffCoords) return
    ;(async () => {
      try {
        const response = await fetch('./api/map/getDuration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pickupCoords: `${pickupCoords[0]},${pickupCoords[1]}`,
            dropoffCoords: `${dropoffCoords[0]},${dropoffCoords[1]}`,
          }),
        })

        const data = await response.json()
        setBasePrice(Math.round(await data.data))
      } catch (error) {
        console.error(error)
      }
    })()
  }, [pickupCoords, dropoffCoords])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('/api/db/getTrips')

        const data = await response.json()
        setTripReq(data.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])


    const isWalletConnected = async () => {
        if(!window.ethereum) return
        try{
            const addressArr = await window.ethereum.request({
                method: 'eth_accounts',
            })

            if(addressArr.length>0){
                setCurrAccount(addressArr[0])
                requestToCreateUserOnSanity(addressArr[0])
            }
            
        }catch(error){
            console.log(error)
        }
    }

    const connectWallet = async () => {
        if(!window.ethereum) return
        try{
            const addressArr = await window.ethereum.request({
                method: 'eth_requestAccounts'
            })   

            if(addressArr.length>0){
                setCurrAccount(addressArr[0])
                requestToCreateUserOnSanity(addressArr[0])
            }

        }catch(error){
            console.error(error)
        }
    }


    const createLocCoordPromise = (locName,locType) => {
    return new Promise(async(resolve,reject)=>{
        try{
        const response = await fetch('./api/map/getLocation',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                location: locName,
            })
        })
        const data = await response.json()

        if(data.message = 'success'){
            switch(locType){
                case 'pickup':
                    setPickupCoords(data.data)
                    break
                case'dropoff':
                    setDropoffCoords(data.data)
                    break
            }
            resolve()
        }else{
            reject()
        }
    }catch(error){
        console.error(error)
        reject()
    }
    })
    }

    useEffect(()=>{
        if(pickup&&dropoff){
            ;(async()=>{
            await Promise.all([
                createLocCoordPromise(pickup,'pickup'),
                createLocCoordPromise(dropoff, 'dropoff'),
            ])
        })()
    }else return
    },[pickup,dropoff])


    const requestToCreateUserOnSanity = async address => {
        if(!window.ethereum) return
        try{
            await fetch('/api/db/createUserAccount',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userWalletAddress: address,
                    name: faker.name.fullName(),
                }),
            })
            console.log()
        }catch(error){
            console.error(error)
        }
    }

    const requestCurrUsersInfo = async wallet => {
        try {
            const response = await fetch(
                `/api/db/getUserAccount?wallet=${wallet}`,
            )

            const data = await response.json()
            setCurrUser(data.data)
        } catch (error) {
            console.error(error)
        }
    }

    const requestCurrUserActiveTrips = async passengerWallet => {
        console.log(passengerWallet)
        try{
            const response = await fetch(
                `/api/db/getActiveTrips?passengerWallet=${passengerWallet}`,
            )

            const data = await response.json()
            if(data.data !== undefined){
            setActiveTrips(data.data)
            }
        }catch(error){
            console.error(error)
        }
    }
    const requestCurrUserActiveTripsDriver = async driverWallet => {
        console.log(driverWallet)
        try{
            const response = await fetch(
                `/api/db/getActiveTripsDriver?driverWallet=${driverWallet}`,
            )

            const data = await response.json()
            if(data.data !== undefined){
            setActiveTrips(data.data)
            }
        }catch(error){
            console.error(error)
        }
    }

    return(
        <FrContext.Provider value={{
            pickup,
            setPickup,
            dropoff,
            setDropoff,
            pickupCoords,
            setPickupCoords,
            dropoffCoords,
            setDropoffCoords,
            connectWallet,
            currAccount,
            currUser,
            price,
            setPrice,
            selectedRideType,
            setSelectedRideType,
            metamask,
            basePrice,
            setBasePrice,
            tripReq,
            setTripReq,
            activeTrips,
            setActiveTrips,
        }}>{children}</FrContext.Provider>
    )
}