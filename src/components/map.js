import React, { useRef, useEffect } from "react";
import ReactMapGL from 'react-map-gl';


// hooks allow us to create a map component as a function
const Map = ({lat,long}) => {
    const [viewport, setViewport] = React.useState({
      latitude: lat,
      longitude: long,
      zoom: 10.5
    });
  
    return (
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/abodu-andy/ckl05i8dy07o217o6b6js5dl2"
        mapboxApiAccessToken="pk.eyJ1IjoiYWJvZHUtYW5keSIsImEiOiJja2p1cTk0Mm4xbnp4MnFudzhqbDlkc2EwIn0.MfjqGLbKhKJ2oF7WI7E6EA"
        onViewportChange={(viewport) => setViewport(viewport)}
       
      />
    );
}


export default Map;

