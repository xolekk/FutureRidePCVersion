import React from 'react'
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'

const style = {
    wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [-0.15, 51.5],
            zoom:10,
        })
    })


    return <div className={style.wrapper} id='map' />
}

export default Map
