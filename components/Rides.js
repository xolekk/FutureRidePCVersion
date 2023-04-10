import React from 'react'

const style = {
    wrapper:`h-full flex flex-col`,
    title:`text-gray-500 text-center text-xs py-2 border-b`,
    list:`flex flex-col flex-1 overflow-scroll`,
    car:`flex p-3 m-2 items-center border-2 border-white`,
    details:`ml-2 flex-1`,
    setviceType:`font-medium`,
    time:`text-xs text-blue-500`,
    container:`flex items-center`,
    price:`mr-[-0.8rem]`,
}

const carList = [
    {
        name: 'Economy',
        price: 1,
    },
    {
        name: 'Premium',
        price: 1.5,
    },
    {
        name: 'Luxury',
        price: 2,
    },
]

const base = 154;

const Rides = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.title}>Choose a ride, or swipe up for more</div>
        <div className={style.list}>
            {carList.map((car, index)=>(
                <div className={style.car}>
                    <div className={style.details}>
                        <div className={style.serviceType}>{car.name}</div>
                        <div className={style.time}>5 min away</div>
                    </div>
                    <div className={style.container}>
                        <div className={style.price}>{((base/10**5)*5*car.price).toFixed(5)}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Rides
