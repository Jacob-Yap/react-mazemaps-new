import React, { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"

function SearchBar(props) {
    // props.map.flyTo({
    //     center: [145.1334107614092, -37.91086726803046],
    //     zoom: 19,
    //     duration: 2000,
    // })
    // console.log("--------------------------")
    var mySearch = new window.Mazemap.Search.SearchController({
        campusid: 159,

        rows: 10,

        withpois: true,
        withbuilding: false,
        withtype: false,
        withcampus: false,

        resultsFormat: "geojson",
    })

    const [userInput, setInput] = useState()
    useEffect(() => {
        if (userInput) {
            userSearch()
        }
    }, [userInput])
    function userSearch() {
        var mySearchInput = new window.Mazemap.Search.SearchInput({
            container: document.getElementById("search-input-container"),
            input: document.getElementById("searchInput"),
            suggestions: document.getElementById("suggestions"),
            searchController: mySearch,
        }).on("itemclick", function (e) {
            console.log(e.item)
            var poi = e.item
            var coordinates = window.Mazemap.Util.getPoiLngLat(poi)
            props.map.flyTo({
                center: coordinates,
                zoom: 19,
                duration: 2000,
            })

            console.log(coordinates)
            console.log("----------------------------------")
        })
    }

    return (
        <div className="SearchBar">
            <div class="input-group-prepend">
                <input
                    tabIndex="0"
                    id="searchInput"
                    className="search-input"
                    autoComplete="off"
                    type="text"
                    name="search"
                    placeholder="Search"
                    value={userInput}
                    onChange={(e) => setInput(e.target.value)}
                />

                <div id="suggestions" class="search-suggestions default"></div>
            </div>
        </div>
    )
}
export default SearchBar
