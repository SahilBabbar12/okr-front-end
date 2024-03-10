import { Routes, Route } from "react-router-dom";
import {AddOkrPage, Login, ProfileDetails, TeamPage} from "../pages";
import {ProtectedRoute} from "./ProtectedRoute";
import { Header, Navbar } from "../components";
export const AppRouters = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Header />
        <Routes>
            <Route>
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<ProfileDetails />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/addokr" element={<AddOkrPage />} />
            </Route>
        </Routes>
        </div>
    )
}
                                                                             