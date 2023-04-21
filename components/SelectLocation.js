import React from 'react'
import { useState,useContext } from 'react'
import { FrContext } from '@/context/context'

const style = {
    box: `h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2`,
    focus:`border-black`,
}

const SelectLocation = () => {
    const [inFocus, setInFocus] = useState('from')
    const {pickup,setPickup,dropoff,setDropoff} = useContext(FrContext)

  return (
    <div className="pt-2">
        <div className="w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden">
            {inFocus === 'from' ? 'Where can we pick you up?' : 'Where to?'}
        </div>
        <div className="flex flex-col mb-4 relative">
            <div
            className={`${style.box} ${
                inFocus === 'from' && style.focus
            }`}
            >
                <input 
                className="my-2 rounded-2 p-2 outline-none border-none bg-transparent  h-full w-full"
                placeholder='Enter pickup location'
                value={pickup}
                onChange={e => setPickup(e.target.value)}
                onFocus={()=>setInFocus('from')}
                />
            </div>
            <div
            className={`${style.box} ${
                inFocus === 'to' && style.focus
            }`}
            >
                <input
                className="my-2 rounded-2 p-2 outline-none border-none bg-transparent  h-full w-full"
                placeholder='Where to?'
                value={dropoff}
                onChange={e=>setDropoff(e.target.value)}
                onFocus={()=>setInFocus('to')}
                />
              </div>
        </div>
    </div>
  )
}

export default SelectLocation
