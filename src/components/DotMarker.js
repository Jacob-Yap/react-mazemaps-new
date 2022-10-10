import React, { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"

function DotMarker(props) {
    // console.log(props.lng)
    // console.log(props.lat)
    console.log(props.lngLat)
    // props.map.flyTo({
    //     center: props.lngLat,
    //     zoom: 19,
    //     duration: 2000,
    // })
    function currentLocMarker() {
        if (props.lngLat) {
            props.map.flyTo({
                center: props.lngLat,
                zoom: 19,
                duration: 2000,
            })
            window.blueDot = new window.Mazemap.BlueDot({
                map: props.map,
            })
                .setZLevel(1)
                .setAccuracy(10)
                .setLngLat({ lng: props.lngLat[0], lat: props.lngLat[1] })
                // .setLngLat({ lng: 145.13433289910176, lat: -37.91301299847796 })
                .show()
        }
    }

    return (
        <div className="DotMarker">
            <Button variant="secondary" onClick={currentLocMarker}>
                View
            </Button>
            {/* <Button variant="secondary">View</Button> */}
        </div>
    )
}
export default DotMarker
