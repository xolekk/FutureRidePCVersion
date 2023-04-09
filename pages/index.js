import Navbar from "@/components/Navbar"

const style ={
  wrapper: `h-screen w-screen flex flex-col`
}

export default function Home() {
  return (
   <div className={style.wrapper}>
    <Navbar />
    <div className={style.main}></div>
      <div className={style.requestArea}>
        <div className={style.rideRequest}>


        </div>
      </div>
   </div>
  )
}
