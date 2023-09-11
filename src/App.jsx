import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import LayoutPage from "./layouts/Layout";
import { HotelDetails, HotelList } from "./components";
import { Toaster } from "react-hot-toast";

import "./App.css";

const client = new QueryClient();

export default function App() {
  return (
    <>
      <Toaster position="botton-right" reverseOrder={false} />
      <QueryClientProvider client={client}>
        <LayoutPage>
          <Switch>
            <Route path="/" component={HotelList} />
            <Route path="/hotel/:id" component={HotelDetails} />
          </Switch>
        </LayoutPage>
      </QueryClientProvider>
    </>
  );
}
