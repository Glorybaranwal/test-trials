import React, { useEffect } from "react";
import {
  Map,
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  CircleMarker
} from "react-leaflet";
import { defaultMarker } from "./defaultMarker";
import { circle } from "leaflet";


const center = [51.505, -0.09];
const posit = [51.46, -0.08];
const posit2 = [51.5, -0.08];
const posit3 = [51.45, -0.08];

const popupContent = {
    textAlign: "center",
    height: "350px",
    marginTop: "30px"
  };
  const popupHead = {
    fontWeight: "bold",
    fontSize: "22px"
  };
  
  const popupText = {
    fontSize: "15px",
    marginBottom: "20px"
  };
  
  const okText = {
    fontSize: "15px"
  };



  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (newPos) => setPosition(newPos),
      console.error
    );
  }, []);

const MapComp = () => {
        
  return (
  

    <MapContainer center={[12.374729,22.4464757]} zoom={13} scrollWheelZoom={true} style={{height: "100%", width: "100%",zIndex:'1'}}>

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={posit2}>
        <CircleMarker center={posit2} fillColor="blue" opacity={1} radius={25}>
          <Popup>
            <div style={popupContent}>
              <img
                src="https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/149_check_ok-512.png"
                width="150"
                height="150"
                alt="no img"
              />
              <div className="m-2" style={popupHead}>
                Success!
              </div>
              <span style={popupText}>POSITION Second!!!</span>
              <div className="m-2" style={okText}>
                Okay
              </div>
            </div>
          </Popup>
        </CircleMarker>
      </Marker>

      <Marker position={posit3} icon={defaultMarker}>
        <Popup className="request-popup">
          <div style={popupContent}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/149_check_ok-512.png"
              width="150"
              height="150"
              alt="no img"
            />
            <div className="m-2" style={popupHead}>
              Success!
            </div>
            <span style={popupText}>POSITION Third!!!</span>
            <div className="m-2" style={okText}>
              Okay
            </div>
          </div>
        </Popup>
      </Marker>
      <Marker position={posit} icon={defaultMarker}>
        <Popup className="request-popup">
          <div style={popupContent}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/149_check_ok-512.png"
              width="150"
              height="150"
              alt="no img"
            />
            <div className="m-2" style={popupHead}>
              Success!
            </div>
            <span style={popupText}>POSITION !!!</span>
            <div className="m-2" style={okText}>
              Okay
            </div>
          </div>
        </Popup>
      </Marker>
      <Marker position={center} icon={defaultMarker}>
        <Popup className="request-popup">
          <div style={popupContent}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/149_check_ok-512.png"
              width="150"
              height="150"
              alt="no img"
            />
            <div className="m-2" style={popupHead}>
              Success!
            </div>
            <span style={popupText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
            <div className="m-2" style={okText}>
              Okay
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComp;
