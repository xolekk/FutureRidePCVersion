import React from 'react'
import Image from 'next/image'
import { BsPerson } from 'react-icons/bs'
import { FrContext } from '@/context/context'
import { useContext } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const {currAccount,connectWallet,currUser} = useContext(FrContext)

  var name = ''
  var image
  if(currUser !== undefined){
    name = currUser.name
    if(currUser.image !== null){
      image = currUser.image
    } else{
      image = ' '
    }
  } else{
    name = ' '
  }

  return (
    <div className="h-16 w-full bg-purple-800 text-white flex md:justify-around items-center px-60 fixed z-20">
      <div className="flex gap-3">
        <div className="text-3xl text-white flex cursor-pointer mr-16"><Link href="/">FutureRide</Link></div>
        <div className="text-lg text-white font-medium flex items-center mx-4 cursor-pointer"><Link href="/">Ride</Link></div>
        <div className="text-lg text-white font-medium flex items-center mx-4 cursor-pointer"><Link href="/drive">Drive</Link></div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="text-lg text-white font-medium flex items-center mx-4 cursor-pointer"><Link href="/help">Help</Link></div>
        <div className="text-lg text-white font-medium flex items-center mx-4 cursor-pointer"><Link href="/account">{name}</Link></div>
      
      {currAccount?(
        <div>{currAccount.slice(0,6)}...{currAccount.slice(39)}</div>
      ) : (
        <div className="flex items-center cursor-pointer hover:bg-purple-400" onClick={()=>connectWallet()}>
            <BsPerson/>
            <span className="ml-2">Log in</span>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar
