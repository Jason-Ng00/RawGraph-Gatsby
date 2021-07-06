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
    position: [1.335, 103.0507],
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
