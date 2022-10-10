import React, { useContext, useState } from "react"
import "../css/Sidebar.css"
import Offcanvas from "react-bootstrap/Offcanvas"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import ListGroup from "react-bootstrap/ListGroup"
import SidebarLocationButton from "./SidebarLocationButton"
import SearchBar from "./SearchBar"
import DotMarker from "./DotMarker"
import LocationsContext from "../contexts/LocationsContext"

function Sidebar(props) {
    // const { locations } = useContext(LocationsContext)
    // const { value } = useContext(LocationsContext)
    // const value = useContext(LocationsContext)
    // console.log(value)

    // Just the same way to initialize as always...
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [showLoc, setShowLoc] = useState(false)
    const locMenuClose = () => setShowLoc(false)
    const locMenuOpen = () => setShowLoc(true)

    const [showSearch, setShowSearch] = useState(false)
    const searchMenuClose = () => setShowSearch(false)
    const searchMenuOpen = () => setShowSearch(true)

    const [showDirections, setShowDirections] = useState(false)
    const directionsMenuClose = () => setShowDirections(false)
    const directionsMenuOpen = () => setShowDirections(true)

    return (
        <div className="Sidebar">
            {/* <Button variant="dark" onClick={handleShow}>
                Menu
            </Button> */}
            <Button variant="dark" onClick={locMenuOpen}>
                AR Walk Locations
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action onClick={locMenuOpen}>
                            Locations
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={searchMenuOpen}>
                            Search
                        </ListGroup.Item>
                        {/* <ListGroup.Item action onClick={directionsMenuOpen}>
                            Directions
                        </ListGroup.Item> */}
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={showLoc} onHide={locMenuClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Indigenous AR Locations</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup defaultActiveKey="#link1">
                        {/* <ButtonGroup vertical> */}
                        {/* {console.log(Object.entries(props.locationsData))} */}
                        {/* {props.locationsList.map((location) => {
                            console.log(location["summary"])
                            return (
                                <SidebarLocationButton
                                    map={props.map}
                                    title={location["title"]}
                                    summary={location["summary"]}
                                    lngLat={location["lngLat"]}
                                />
                            )
                        })} */}
                        {Object.entries(props.locationsData).map(
                            (locationObject, i) => {
                                // console.log(locationObject["1"]["lnglat"])
                                return (
                                    <SidebarLocationButton
                                        key={i}
                                        map={props.map}
                                        title={locationObject["1"]["title"]}
                                        summary={locationObject["1"]["summary"]}
                                        lngLat={locationObject["1"]["lnglat"]}
                                        lng={locationObject["1"]["lng"]}
                                        lat={locationObject["1"]["lat"]}
                                    />
                                )
                            }
                        )}
                        {/* </ButtonGroup> */}
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={showSearch} onHide={searchMenuClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Search</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SearchBar map={props.map} />
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={showDirections} onHide={directionsMenuClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Directions</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SearchBar map={props.map} />
                    <DotMarker map={props.map}></DotMarker>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
export default Sidebar
