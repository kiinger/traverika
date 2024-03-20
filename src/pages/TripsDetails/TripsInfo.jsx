import { useOutletContext } from "react-router-dom";
import "./TripsInfo.css";
import { MdTimer, MdDescription } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export default function TripInfo() {
  const tripDetails = useOutletContext();
  return (
    <dl className="trip-info">
      <div className="trip-description">
        <dt>
          <MdDescription />
          <h3>Description</h3>
        </dt>

        <dd>{tripDetails.description}</dd>
      </div>

      <div className="trip-description">
        <dt>
          <MdTimer />
          <h3>Duration</h3>
        </dt>
        <dd>{tripDetails.duration}</dd>
      </div>
      <div className="trip-description">
        <dt>
          <FaStar />
          <h3>Rating</h3>
        </dt>
        <dd>{tripDetails.rating}</dd>
      </div>
    </dl>
  );
}
