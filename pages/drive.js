import Navbar from "@/components/Navbar"
import TripDisplay from "@/components/TripDisplay"

const style={
    wrapper: `h-screen w-screen flex flex-col`,
    list: `flex flex-col flex-1 overflow-scroll z-200 items-justify`
}

export default function drive(){
    return(
        <div className={style.wrapper}>
            <Navbar />
            <div className={style.list}>
                <TripDisplay />
            </div>
        </div>
    )
} 