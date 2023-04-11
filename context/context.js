import { createContext,useState,useEffect } from "react";

export const frContext = createContext()



export const frProvider = ({children}) => {
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
            switch(locationType){
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
        <frContext.Provider value={{}}>{children}</frContext.Provider>
    )
}