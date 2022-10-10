import React from "react"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"
import DotMarker from "./DotMarker"

function SidebarLocationButton(props) {
    // props.map.flyTo({
    //     center: [145.1334107614092, -37.91086726803046],
    //     zoom: 19,
    //     duration: 2000,
    // })
    // console.log(props.lng)
    // console.log(props.lat)
    // console.log(props.lnglat)

    function saveLocation() {
        console.log("test")
    }

    return (
        // <div className="SidebarLocationButton">
        // <Button variant="light">{props.title}</Button>
        <ListGroup.Item
            // action
            // onClick={saveLocation}
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.location}</div>
                {props.summary}
            </div>
            <DotMarker
                map={props.map}
                lngLat={props.lngLat}
                lng={props.lng}
                lat={props.lat}
            ></DotMarker>
        </ListGroup.Item>
        // <ListGroup defaultActiveKey="#link1">
        // <ListGroup.Item action onClick={saveLocation}>
        //     {props.title}
        // </ListGroup.Item>
        // </ListGroup>
        // </div>
    )
}
export default SidebarLocationButton
