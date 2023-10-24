import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import SignUpForm from "../SignUpForm/SignUpForm";
// import LogInForm from "../LogInForm/LogInForm";
import PageNotFound from "../PageNotFound/PageNotFound";
import ClientDashboard from "../ClientDashboard/ClientDashboard";
import SpacesList from "../ClientDashboard/SpacesList";
import DashBoard from "../ClientDashboard/DashBoard";
import { ClientContext } from "../../context/ClientContext";
import Help from "../ClientDashboard/Help";
import Settings from "../ClientDashboard/Settings";
import Recents from "../ClientDashboard/Recents";
import ProfileModal from "../ClientDashboard/ProfileModal";
import Signup from "../signup and login/Signup";
import Login from "../signup and login/Login";

// const useAuth = () => {
//   const client = localStorage.getItem("client");
//   return !!client;
// };

function MainRoutes() {
  const { client } = useContext(ClientContext);
  console.log(client);
  // const isAuthenticated = useAuth();

  return (
    <div>
      <div>
        <Routes>
          <Route path="/client" element={<ClientDashboard />}>
            <Route path="/client" element={<Navigate replace to="dash" />} />
            <Route path="dash" element={<DashBoard client={client} />}>
              <Route path="viewProfile" element={<ProfileModal />} />
            </Route>
            <Route path="spaces" element={<SpacesList />}></Route>
            <Route path="recents" element={<Recents />} />
            <Route path="help" element={<Help />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainRoutes;

// <div>
//   <Routes>
//     <Route path="/client" element={<ClientDashboard />}>
//       <Route path="/client" element={<Navigate replace to="dashboard" />} />
//       <Route path="dashboard" element={<DashBoard client={client} />}>
//         <Route path="viewProfile" element={<ProfileModal />} />
//       </Route>
//       <Route path="spaces" element={<SpacesList />} />
//       <Route path="recents" element={<Recents />} />
//       <Route path="help" element={<Help />} />
//       <Route path="settings" element={<Settings />} />
//     </Route>
//     <Route path="*" element={<PageNotFound />} />

//     <Route path="/" element={<SignUpForm />} />
//     <Route path="/login" element={<LogInForm />} />
//   </Routes>
// </div>

// with authenticate

// {isAuthenticated ? (
//   <div>
//     <Routes>
//       <Route path="/client" element={<ClientDashboard />}>
//         <Route path="/client" element={<Navigate replace to="dash" />} />
//         <Route path="dash" element={<DashBoard client={client} />}>
//           <Route path="viewProfile" element={<ProfileModal />} />
//         </Route>
//         <Route path="spaces" element={<SpacesList />}>
//           {/* <Route path="booking" element={<BookingModal />} /> */}
//         </Route>
//         <Route path="recents" element={<Recents />} />
//         <Route path="help" element={<Help />} />
//         <Route path="settings" element={<Settings />} />
//         <Route path="*" element={<PageNotFound />} />
//         {/* <Route path="booking" element={<BookingModal />} /> */}
//       </Route>
//     </Routes>
//   </div>
// ) : (
//   <div>
//     <Routes>
//       <Route path="/createspace" element={<CreateSpace />} />
//       {/* <Route path="/" element={<SignUpForm />} /> */}
//       <Route path="/signup" element={<Signup />} />

//       {/* <Route path="/login" element={<LogInForm />} /> */}
//       <Route path="/login" element={<Login />} />

//       <Route
//         path="*"
//         element={
//           isAuthenticated ? <PageNotFound /> : <Navigate to="/login" />
//         }
//       />
//     </Routes>
//   </div>
// )}
// </div>
