import { LightningElement } from 'lwc';
import { getLocationService } from 'lightning/mobileCapabilities';

export default class GetLocation extends LightningElement {

    lat;
    lon;
    mapMarkersList;
    zoomLevel;
    getCurrentLocation(){
        if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
                this.lat=position.coords.latitude;
                this.lon=position.coords.longitude;
        },
        (e)=>{
                //errorcallback
        },
        {
            enableHighAccuracy:true
        }

        );
        alert(this.lat);
        alert(this.lon);
        this.mapMarkersList=[{
            location:{
                Latitude:this.lat,
                Longitude:this.lon,
            },
            title:"You Are Here"
        }];
        this.zoomLevel="4";


    }
     
}

}