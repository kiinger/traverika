import React from "react";
import "./server";
import Layout from "./component/layout/index";
import TripsDetails, {
  loader as tripsDetailsLoader,
} from "./pages/TripsDetails/index";
import Trips, { loader as tripsLoader } from "./pages/Trips/Trips";
import { Home, About } from "./pages/pages";
import Contact, { action as contactAction } from "./pages/Contact/Contact";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import TripInfo from "./pages/TripsDetails/TripsInfo";
import TripFacility from "./pages/TripsDetails/TripFacility";
import TripPrice from "./pages/TripsDetails/TripPrice";

import "react-toastify/dist/ReactToastify.css";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="trips"
          element={<Trips />}
          loader={tripsLoader}
          id="trips"
        />
        <Route
          path="trips/:id"
          element={<TripsDetails />}
          loader={tripsDetailsLoader}
        >
          <Route index element={<TripInfo />} />
          <Route path="facility-service" element={<TripFacility />} />
          <Route path="price" element={<TripPrice />} />
        </Route>
        <Route path="about us" element={<About />} />
        <Route path="contact us" element={<Contact />} action={contactAction} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
