import {BiMap} from "react-icons/bi"


const Card = (props) => {
  return (
        <div className="cards">
            <img src={`${props.imageUrl}`} alt="travel" className="image"/>
            
            <div className="content">
                <p className="location"><BiMap className="map" /> <span className="country">{props.location}</span> <a href={props.googleMapsUrl} className="link">View on Google Maps</a></p>
                <p className="title">{props.title}</p>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
  )
}

export default Card