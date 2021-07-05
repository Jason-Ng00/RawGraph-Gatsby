import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as styles from './LeafletMap.module.scss'


export default class LeafletMap extends React.Component {

  static propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,

    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,

    /** If set, will display a marker, which when clicked will display this text **/
    markerText: PropTypes.string
  }

  static defaultProps = {
    position: [51, -1],
    zoom: 13,
    markerText: ""
  }

  render() {
    if (typeof window !== 'undefined') {
      return (
        <MapContainer className={styles.leafletContainer} data={this.props.data} center={this.props.position} zoom={this.props.zoom}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {/* {this.props.markerText !== "" &&
          <Marker position={this.props.position}>
            <Popup>{this.props.markerText}</Popup>
          </Marker>
          } */}
          {/* {this.props.markerText !== "" &&
          <Marker position={[1.3521, 103.9198]}>
            <Popup>{"this is another marker"}</Popup>
          </Marker>
          }
          {this.props.markerText !== "" &&
          <Marker position={[this.props.data.nodes[0].latitude, this.props.data.nodes[0].longitude]}>
            <Popup>{this.props.data.nodes[0].ccchi}</Popup>
          </Marker>
          } */}
          {this.props.data.nodes.map((location) => (
            <Marker position={[location.latitude === null ? 1.335 : location.latitude, location.longitude === null ? 103.0507 : location.longitude]}>
            <Popup>
            <div>
              <span>{location.ccchi}</span> <br />
              <span>{location.cchypy}</span>
            </div>
            </Popup>
          </Marker>
          ))}
        </MapContainer>
      );
      }
      return null
  }
}
