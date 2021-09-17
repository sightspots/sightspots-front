import React from "react";
import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import "ol/ol.css";

import { RMap, ROSM, RLayerVector, RFeature, ROverlay, RStyle } from "rlayers";
import locationIcon from "./assets/pin.svg";


export default function Overlays(props){
    console.log(props.coor);
  return (
    <RMap
      width={"100%"}
      height={"60vh"}
      className="example-map"
      initial={{ center: fromLonLat(props.coor), zoom: 11 }}
    >
      <ROSM />
      <RLayerVector zIndex={10}>
        <RStyle.RStyle>
          <RStyle.RIcon src={locationIcon} anchor={[0.5, 0.8]} />
        </RStyle.RStyle>
        <RFeature
          geometry={new Point(fromLonLat([-3.590087, 37.176089]))}
          onClick={(e) =>
            e.map.getView().fit(e.target.getGeometry().getExtent(), {
              duration: 250,
              maxZoom: 15,
            })
          }
        >
          <ROverlay className="example-overlay">Alhambra</ROverlay>
        </RFeature>
      </RLayerVector>
    </RMap>
  );
}
