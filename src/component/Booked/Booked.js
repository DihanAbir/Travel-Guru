import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Booked.css';
import image1 from '../../travel-guru/Rectangle 26.png'
import image2 from '../../travel-guru/Rectangle 27.png'
import image3 from '../../travel-guru/Rectangle 28.png'


class Booked extends Component {
    
    // const {name, img, price, description} = singleProduct;
    render() {
        return (
            <div className="d-flex">
                <div className="hotels m-3">
                    <h1>Suggested Hotels</h1>
                    <div className="hotel d-flex">
                        <div className="img m-3">
                            <img src={image1} alt=""/>
                        </div>
                        <div className="details mx-3">
                            <h4>Hotle paradise</h4>
                            <p>per night: 30$</p>
                            <p>3 person</p>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <div className="hotel d-flex">
                        <div className="img m-3">
                            <img src={image2} alt=""/>
                        </div>
                        <div className="details mx-3">
                            <h4>Royal city</h4>
                            <p>per night: 20$</p>
                            <p>couple room</p>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <div className="hotel d-flex">
                        <div className="img m-3">
                            <img src={image3} alt=""/>
                        </div>
                        <div className="details mx-3">
                            <h4>Super delux paradise</h4>
                            <p>per night: 50$</p>
                            <p>2 person</p>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                </div>
                <div className="map">
                <Map google={this.props.google} zoom={14}>
    
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        
                    </InfoWindow>
                </Map>
                </div>
            </div>
        );
    }
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAjOcKsS_53WhHlxgVVaSiRHflfLRrc_DY")
  })(Booked)