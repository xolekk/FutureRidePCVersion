import Navbar from "@/components/Navbar"

const style={
    wrapper: `h-screen w-screen flex flex-col`,
    mail: `flex flex-col justify-center items-center h-screen text-purple-800`,
}

export default function help(){
    return(
        <div className={style.wrapper}>
            <Navbar/>
                <div className={style.mail}>
                If there are any problems, please contact me via email: olek.stroinski@gmail.com
                This website is still in alpha version.
                </div>
        </div>
    )
} 