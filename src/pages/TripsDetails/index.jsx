import {
  Link,
  useLoaderData,
  defer,
  Await,
  Outlet,
  useNavigate,
} from "react-router-dom";
import React from "react";
import "./index.css";
import { FaArrowLeft } from "react-icons/fa6";

import { getData } from "../../API";
import Loader from "../../component/Loader";
export async function loader({ params }) {
  const { id } = params;
  const data = getData(`/api/trips/${id}`);
  return defer({ tripsDetails: data });
}
export default function TripsDetails() {
  const data = useLoaderData();
  const navigate = useNavigate();
  return (
    <>
      <Link
        onClick={() => navigate(-1)}
        relative="path"
        className="button-back"
      >
        <FaArrowLeft /> Back
      </Link>
      <section className="section-tripsDetails">
        <div className="tripDetails">
          <React.Suspense fallback={<Loader />}>
            <Await resolve={data.tripsDetails}>
              {({ tripsDetails }) => {
                const placename = tripsDetails.placename
                  .split(" ")
                  .join("-")
                  .toLowerCase();

                return (
                  <div>
                    <nav>
                      <ul>
                        <li>
                          <Link to=".">Info</Link>
                        </li>
                        <li>
                          <Link to="facility-service" state={location.state}>
                            Facility Service
                          </Link>
                        </li>
                        <li>
                          <Link to="price" state={location.state}>
                            Price
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <div className="tripDetails-content">
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
                      <div className="tripDetails-description">
                        <h2>{`${tripsDetails.placename},${tripsDetails.country}`}</h2>

                        <Outlet context={tripsDetails} />
                      </div>
                    </div>
                  </div>
                );
              }}
            </Await>
          </React.Suspense>
        </div>
      </section>
    </>
  );
}
