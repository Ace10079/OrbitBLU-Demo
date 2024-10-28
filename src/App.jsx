import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Insitution from "./pages/institution/Institution";
import Layout from "./pages/layout/Layout";
import Enquries from "./pages/enquries/Enquries";
import Tickets from "./pages/tickets/Tickets";
import Packages from "./pages/packages/Packages"
import Interview from "./pages/interview/Interview";
import ViewTickets from "./pages/tickets/ViewTickets";
import Subscription from "./pages/subscription/Subscription";
import Settings from "./pages/settings/Settings";
import Leads from "./pages/leads/Leads";
import LeadsDetails from "./pages/leads/LeadsDetails";
import User from "./pages/users/User";
import UsersView from "./pages/users/UsersView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leads" element={<Leads/>}/>
            <Route path="/LeadDetails" element={<LeadsDetails/>}/>
            <Route path="/enquries" element={<Enquries/>}/>
            <Route path="/insitution" element={<Insitution/>}/>
            <Route path="/tickets" element={<Tickets/>}/> 
            <Route path="/viewtickets" element={<ViewTickets/>}/>  
            <Route path="/packages" element={<Packages/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/UsersView" element={<UsersView/>}/>
            <Route  path="/interview" element={<Interview/>}/>
            <Route  path="/subscription" element={<Subscription/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
