import { createContext,useState,useEffect } from "react";

export const FrContext = createContext()

export const FrProvider = ({children}) => {
    const[pickup,setPickup] = useState('')
    const[dropoff,setDropoff] = useState('')
    const [pickupCoords,setPickupCoords] = useState()
    const[dropoffCoords,setDropoffCoords] = useState()

    const createLocCoordPromise = (locName,locType) => {
    return new Promise(async(resolve,reject)=>{
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
    })
}


    useEffect(()=>{
        if(pickup&&dropoff){
            ;(async()=>{
            await Promise.all([
                createLocCoordPromise(pickup,'pickup'),
                createLocCoordPromise(dropoff, 'dropoff')
            ])
        })()
    }else return
    },[pickup,dropoff])

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
        }}>{children}</FrContext.Provider>
    )
}