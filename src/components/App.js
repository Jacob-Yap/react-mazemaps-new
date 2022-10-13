import React, { useState, useEffect } from "react"
import "../css/App.css"
import locations from "../data/locations.json"
import Sidebar from "./Sidebar.js"
import SearchBar from "./SearchBar"
import Button from "react-bootstrap/Button"
// import LocationsContextProvider from "../contexts/LocationsContext"

function App() {
    // Just the same way to initialize as always...
    const [map, setMap] = useState()
    const [mapLoaded, setMapLoaded] = useState(false)
    const locationsList = []
    // const [locationsList, setList] = useState(initialLocations)
    /*
     * Function to load locations and add makrers and popups
     */
    function loadLocations() {
        for (var item in locations) {
            let loc = locations[item]
            locationsList.push(locations[item])
            if (loc["lnglat"]) {
                let marker = createMarker(loc["lnglat"], "MazeBlue", "AR")
                createPopup(
                    marker,
                    loc["title"],
                    loc["description"],
                    loc["image"],
                    loc["link"]
                )
            }
        }
    }

    /**
     * Creating a marker at a specified location on the map
     */
    function createMarker(lngLat, colour, icon) {
        var marker = new window.Mazemap.MazeMarker({
            color: colour,
            size: 40,
            innerCircle: true,
            glyph: icon,
            glyphSize: 12,
            glyphColor: colour,
            preventClickBubble: false, // Allow click to go through to global map layer
        })
            .setLngLat(lngLat)
            .addTo(map)
        // map.flyTo({ center: lngLat, zoom: 19, duration: 2000 });
        return marker
    }

    /*
     * Creating the popups which show when the markers are clicked
     */
    function createPopup(marker, title, description, image, link) {
        var popup = new window.Mazemap.Popup({
            closeOnClick: true,
            offset: [0, -27],
        }).setHTML(
            `<h3>${title}</h3>
    <p>${description} </br><img src=${image} width="200" height="200"></p>
    <p style="max-width: 200px;"> Click the <a href = ${link} target="_blank"> link</a> and scan the AR marker to view an AR experience</p>`
        )

        marker.setPopup(popup)
    }

    useEffect(() => {
        setMap(
            new window.Mazemap.Map({
                container: "map",
                campuses: 159,
                center: { lng: 145.1327, lat: -37.9131 },
                zoom: 16,
                zLevel: 1,
                zLevelControl: true,
                scrollZoom: true,
                doubleClickZoom: true,
                touchZoomRotate: true,
            }).on("load", () => {
                setMapLoaded(true)
            })
        )
    }, [])

    useEffect(() => {
        if (mapLoaded) {
            loadLocations()
        }
    }, [mapLoaded])

    return (
        <div className="app">
            <div id="map" aria-label="map view" className="mazemap"></div>

            {/* <LocationsContextProvider> */}
            <Sidebar
                locationsData={locations}
                map={map}
                locationsList={locationsList}
            />
            {/* </LocationsContextProvider> */}
        </div>
    )
}

export default App
