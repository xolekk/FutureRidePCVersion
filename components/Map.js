import React from 'react'
import mapboxgl from 'mapbox-gl'
import { useEffect,useContext } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { FrContext } from '@/context/context'

const style = {
    wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
    const { pickupCoords, dropoffCoords } = useContext(FrContext)

    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [-0.15, 51.5],
            zoom:10,
        })
        
    if(pickupCoords){
    addToMap(map,pickupCoords)
    }

    if(dropoffCoords){
        addToMap(map,dropoffCoords)
    }

    
    },[pickupCoords,dropoffCoords])

    const addToMap=(map,coordinates) => {
        const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
    }

    return <div className={style.wrapper} id='map' />
}

export default Map
