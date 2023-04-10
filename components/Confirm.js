import React from 'react'
import Rides from './Rides'

const style = {
    wrapper:`flex-1 h-full flex flex-col justify-between`,
    rideSelect:`h-full flex flex-col overflow-scroll`,
    confirmContainer:`border-t-2 cursor-pointer z-10`,
    button:`bg-purple-600 text-white m-4 py-4 text-center text-xl`,
}

const Confirm = () => {
    const storeDetails = async () => {}

  return (
    <div className={style.wrapper}>
      <div className={style.rideSelect}>
        <Rides/>
      </div>
      <div className={style.confirmContainer}>
        <div className={style.confirmContainer}>
            <div 
            className={style.button}
            onClick={()=>storeDetails()}
            >Confirm Economy</div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
