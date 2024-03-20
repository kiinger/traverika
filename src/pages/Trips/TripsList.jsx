import "./TripsList.css";
import { Link, useSearchParams } from "react-router-dom";
export default function TripsList({ filterData }) {
  return (
    <div className="trips-list">
      <ul>
        {filterData.map((trip) => {
          const placename = trip.placename.toLowerCase().split(" ").join("-");
          return (
            <li key={trip.id}>
              <Link to={trip.id.toString()}>
                <figure>
                  <div className="img-container">
                    <img
                      src={
                        new URL(
                          `../../assets/${placename}.jpg`,
                          import.meta.url
                        )
                      }
                    />
                  </div>
                  <figcaption>
                    <h3>{trip.placename}</h3>
                    <p>{trip.description}</p>
                  </figcaption>
                </figure>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
