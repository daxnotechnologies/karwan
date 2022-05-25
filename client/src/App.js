import { Route, Routes } from "react-router-dom";
import Users from "./Pages/Users";
import MainPage from "./Pages/MainPage";
import EditUser from "./Components/DisplayItems/EditUser";
import Login from "./Pages/Login";

import EditCategory from "./Components/DisplayItems/EditCategory";
import EditApp from "./Components/DisplayItems/EditApp";

import AddVideo from "./Pages/AddVideo";
import AllVideos from "./Pages/AllVideos";
import AllVisaRequests from "./Pages/AllVisaRequests";
import AllBooks from "./Pages/AllBooks";
import AllGroups from "./Pages/AllGroups";
import AddGroup from "./Pages/AddGroup";
import AllBooksRequests from "./Pages/AllBooksRequests";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        {true && (
          <Route path="/dashboard" element={<MainPage />}>
            <Route index element={<AllVideos />} />
            <Route path="/dashboard/categories" element={<AllVideos />} />
            <Route
              path="/dashboard/book-requests"
              element={<AllBooksRequests />}
            />
            <Route
              path="/dashboard/visa-requests"
              element={<AllVisaRequests />}
            />
            <Route path="/dashboard/all-books" element={<AllBooks />} />
            <Route path="/dashboard/all-groups" element={<AllGroups />} />

            <Route path="/dashboard/users" element={<Users />} />
            {/* <Route path="/dashboard/featured-apps" element={<FeaturedApps />} /> */}

            <Route path="/dashboard/add-video" element={<AddVideo />} />
            <Route path="/dashboard/add-group" element={<AddGroup />} />

            <Route path="/dashboard/edit-app/:appId" element={<EditApp />} />
            <Route path="/dashboard/edit-user/:userId" element={<EditUser />} />
            <Route
              path="/dashboard/edit-category/:categoryId"
              element={<EditCategory />}
            />
          </Route>
        )}
        {/* <Route exact path="/*" element={<> Error 404 | Page Not found </>} /> */}
      </Routes>
    </>
  );
}

export default App;
