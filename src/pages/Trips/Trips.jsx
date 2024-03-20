import Filterbar from "./Filterbar";
import TripsList from "./TripsList";
import { getData } from "../../API";
import "./Trips.css";
import React from "react";
import { useLoaderData, useSearchParams, defer, Await } from "react-router-dom";
import Loader from "../../component/Loader";

export async function loader() {
  const data = getData("/api/trips");

  return defer({ trips: data });
}
export default function Trips() {
  const data = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleFilterChange = (key, value) => {
    setSearchParams((prevParam) => {
      if (value === null) {
        prevParam.delete(key);
      } else {
        prevParam.set(key, value);
      }
      return prevParam;
    });
  };
  const handleParamsCheck = (key, value) => {
    return searchParams.get(key) === value;
  };

  return (
    <section className="trips-section">
      <header>
        <h2>Explore deals with free cancellation options</h2>
        <p>
          It's always a good idea to ensure that you can make changes to your
          travel plans, just in case. To help you get started, we've gathered a
          great selection of flexible hotels deals for you to browse below—all
          offering free cancellation policies within a certain cancellation
          window. We recommend that you confirm your exact cancellation window
          on the selected hotel's details page. Searching elsewhere on our site?
          Just look for options that are marked with 'Free cancellation'. Thanks
          for exploring your next trip with us.
        </p>
      </header>

      <div className="tripsList-layout">
        <React.Suspense fallback={<Loader />}>
          <Await resolve={data.trips} errorElement={<p>Error loading....</p>}>
            {({ trips }) => {
              const filterData = searchParams.get("country")
                ? trips.filter(
                    (trip) =>
                      trip.country.toLowerCase() ===
                      searchParams.get("country").toLowerCase()
                  )
                : trips;

              return (
                <>
                  <Filterbar
                    tripsData={trips}
                    onParamsCheck={handleParamsCheck}
                    onFilterChange={handleFilterChange}
                  />
                  <TripsList filterData={filterData} />
                </>
              );
            }}
          </Await>
        </React.Suspense>
      </div>
    </section>
  );
}
