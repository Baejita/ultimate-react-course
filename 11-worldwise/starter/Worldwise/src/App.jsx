import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Product from "./pages/Product";
import Pricing from "./pages/pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City"

const BASE_URL = "http://localhost:9000"
function App() {
  const [cities, setCities] = useState([])
  const [isloading, setIsLoading] = useState (false)

  useEffect(function() {
    async function fetchCities() {
      setIsLoading(true)
      try {const res = await fetch(`${BASE_URL}/cities`)
      const data = await res.json()
      setCities(data)
    }catch{
      alert("There are some ERROR")
    }finally {
      setIsLoading(false)
    }
  }fetchCities()
  
  } , [])

  return (
    <div>
      {/* <h1>Hello Router!</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route index element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />} >
            <Route index element={<CityList cities={cities} isloading={isloading}/>} />
            <Route path="cities" element={<CityList cities={cities} isloading={isloading}/>} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList cities={cities} isloading={isloading}/>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
