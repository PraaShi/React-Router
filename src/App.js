import { createBrowserRouter,Route,createRoutesFromElements, RouterProvider } from "react-router-dom";
//pages
import Home from "./pages/Home"
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, { CareerDetailsLoader }  from "./pages/careers/CareerDetails";
//layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";
import CareersError from "./pages/careers/CareersError";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}> 
      <Route index element={<Home />}/>  
      {/* / */}
      <Route path="about" element={<About />} /> 
      {/* /about  */}

      <Route path="help" element={<HelpLayout />}> 
      {/* /help */}
        <Route path="faq" element={<Faq />}/> 
        <Route path="contact" element={<Contact />} action={contactAction}/>
      </Route>

      <Route path="careers" element={<CareersLayout />} 
      errorElement={<CareersError/>}
      > 
      {/* /careers */}
        <Route 
        index
        element={<Careers/>}
        loader={careersLoader}
        // errorElement={<CareersError/>}
        />
        <Route 
        path=":id"
        element= {<CareerDetails />}
        loader = {CareerDetailsLoader}
        // errorElement={<CareersError/>}
        />
      </Route>

      <Route path="*" element={ <NotFound /> }/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router = { router } />
  );
}

export default App