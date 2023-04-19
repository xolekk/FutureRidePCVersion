import ActiveTripDisplay from "@/components/ActiveTripDisplay"
import Navbar from "@/components/Navbar"

const style={
    wrapper: `h-screen w-screen flex flex-col`,
    list: `flex flex-col flex-1 overflow-scroll z-200 items-justify`,
}

export default function help(){
    return(
        <div className={style.wrapper}>
            <Navbar/>
            <div className={style.list}>
                
            </div>
        </div>
    )
} 