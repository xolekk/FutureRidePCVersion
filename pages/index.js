import Navbar from "@/components/Navbar"
import Map from "@/components/Map"
import SelectLocation from "@/components/SelectLocation"
import Confirm from "@/components/Confirm"
import { useContext } from "react"
import { FrContext } from "@/context/context"


export default function Home() {
  const{currAccount} = useContext(FrContext)


  return (
   <div className="h-screen w-screen flex flex-col">
    <Navbar />
    <div className="h-full w-screen flex-1 z-10">
      <Map />
    </div>

    <div className="h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20">
        {currAccount?(<div className="h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll">
        <SelectLocation/>
        <Confirm/>
        </div>):(
          <div className="h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll">
            Please log in!
          </div>
        )}
      </div>
    </div>
  )
}