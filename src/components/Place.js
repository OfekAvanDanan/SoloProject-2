import { ReactSVG } from "react-svg";
import pinIcon from "./objects/pinIcon.svg"


export default function Place (props) {
    return (
        <div className="place">
                <img src= {props.coverImg} className="place--coverImg" alt={props.place}/>
                <div className="place--info">
                    <div className="place--link">
                        <ReactSVG src={pinIcon} className = "pinIcon"/>
                        <p className="links"><span className="country">{props.country}   </span> <a className= "googleMapsLink" href={props.googleMapLink}> View on Google Maps</a></p>
                    </div>
                    <h1 className="place--name">{props.place}</h1>
                    <h3 className="place--dates">{props.dateStart} - {props.dateEnd}</h3>
                    <p className="place--info">{props.info}</p>
                </div>
        
        </div>
    )
}