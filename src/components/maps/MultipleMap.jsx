import React from "react";
import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import "ol/ol.css";

import { RMap, ROSM, RLayerVector, RFeature, ROverlay, RStyle } from "rlayers";
import locationIcon from "./assets/pin.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import splitCoor from "../../utils/split";

export default function MultipleMap(props) {
  console.log(props);
    
  return (
    <RMap
      width={"100%"}
      height={"40vh"}
      className="example-map"
      initial={{ center: fromLonLat([-3.852734, 39.85401]), zoom: 5 }}
    >
      <ROSM />
      {props.arrCoor.map((coor) => {
        return (
          <RLayerVector key={coor} zIndex={10}>
            <RStyle.RStyle>
              <RStyle.RIcon scale={0} src={locationIcon} anchor={[0.2, 0.4]} />
            </RStyle.RStyle>
            <RFeature
              geometry={new Point(fromLonLat(splitCoor(coor).reverse()))}
            >
              <ROverlay className="example-overlay">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="map__icon" />
              </ROverlay>
            </RFeature>
          </RLayerVector>
        );
      })}
    </RMap>
  );
}
