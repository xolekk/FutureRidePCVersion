import React from 'react'
import Image from 'next/image'
import { BsPerson } from 'react-icons/bs'
import { FrContext } from '@/context/context'
import { useContext } from 'react'
import Link from 'next/link'

const style ={
    wrapper:`h-16 w-full bg-purple-800 text-white flex md:justify-around items-center px-60 fixed z-20`,
    leftMenu: `flex gap-3`,
    logo: `text-3xl text-white flex cursor-pointer mr-16`,
    menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
    rightMenu: `flex gap-3 items-center`,
    userImageArea: `mr-2`,
    userImage:`h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
    logBtn:`flex items-center cursor-pointer hover:bg-purple-400`,
    lobTxt:`ml-2`,
}

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
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}><Link href="/">FutureRide</Link></div>
        <div className={style.menuItem}><Link href="/">Ride</Link></div>
        <div className={style.menuItem}><Link href="/drive">Drive</Link></div>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menuItem}><Link href="/help">Help</Link></div>
        <div className={style.menuItem}><Link href="/account">{name}</Link></div>
        <div className={style.userImageArea}>{image}</div>
      
      {currAccount?(
        <div>{currAccount.slice(0,6)}...{currAccount.slice(39)}</div>
      ) : (
        <div className={style.logBtn} onClick={()=>connectWallet()}>
            <BsPerson/>
            <span className={style.lobTxt}>Log in</span>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar
