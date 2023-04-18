import Navbar from "@/components/Navbar"
import Map from "@/components/Map"
import SelectLocation from "@/components/SelectLocation"
import Confirm from "@/components/Confirm"
import { useContext } from "react"
import { FrContext } from "@/context/context"

const style ={
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  rideRequestContainer:`h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
  rideRequest:`h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
}

export default function Home() {
  const{currAccount} = useContext(FrContext)


  return (
   <div className={style.wrapper}>
    <Navbar />
    <div className={style.main}>
      <Map />
    </div>

    <div className={style.rideRequestContainer}>
        {currAccount?(<div className={style.rideRequest}>
        <SelectLocation/>
        <Confirm/>
        </div>):(
          <div className={style.rideRequest}>
            Please log in!
          </div>
        )}
      </div>
    </div>
  )
}