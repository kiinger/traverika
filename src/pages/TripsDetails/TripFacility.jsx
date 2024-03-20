import { useOutletContext } from "react-router-dom";
import "./TripFacility.css";
export default function TripFacility() {
  const tripDetails = useOutletContext();

  return (
    <ul className="facility-list">
      {tripDetails.included.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
