import React from "react";
import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import "ol/ol.css";

import { Link } from "react-router-dom";

import { RMap, ROSM, RLayerVector, RFeature, ROverlay, RStyle } from "rlayers";
import locationIcon from "./assets/pin.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import splitCoor from "../../utils/split";

export default function MultipleMap(props) {
  const { locations } = props;

  return (
    <RMap
      width={"100%"}
      height={"100vh"}
      className="example-map"
      initial={{ center: fromLonLat([-3.852734, 39.85401]), zoom: 5.5 }}
    >
      <ROSM />
      {locations.map((ele) => {
        return (
          <RLayerVector key={ele._id} zIndex={10}>
            <RStyle.RStyle>
              <RStyle.RIcon scale={0} src={locationIcon} anchor={[0, 0]} />
            </RStyle.RStyle>
            <RFeature
              geometry={new Point(fromLonLat(splitCoor(ele.latLng).reverse()))}
            >
              <ROverlay className="example-overlay">
                <Link className="card__goto" to={`/locations/${ele._id}`}>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="map__icon"
                  />
                </Link>
              </ROverlay>
            </RFeature>
          </RLayerVector>
        );
      })}
    </RMap>
  );
}
