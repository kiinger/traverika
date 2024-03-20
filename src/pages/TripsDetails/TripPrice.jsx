import { useOutletContext } from "react-router-dom";
import "./TripPrice.css";
export default function TripPrice() {
  const tripDetails = useOutletContext();
  return (
    <div className="trip-price">
      <h2>Price</h2>
      <p>{tripDetails.price}</p>
      <address className="contactNumber">
        <p style={{ fontWeight: 800 }}>Contact Number</p>
        <p>
          <span className="contactMethod">Email:</span>
          <a
            href={`mailto:kkh_0821@hotmail.com?cc=kkh_jesus@hotmail.com&subject=I%20am%20Interested%20on%20trips(${tripDetails.placename})&body=Hey!%20Mr%20Kiing`}
          >
            kkh_0821@hotmail.com
          </a>
          <p>
            <span className="contactMethod">Phone number</span>:
            <a href="tel:+0163332413">016-331-2413</a>
          </p>
        </p>
      </address>
    </div>
  );
}
