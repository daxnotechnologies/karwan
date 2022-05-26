import { Route, Routes } from "react-router-dom";
import Users from "./Pages/Users";
import MainPage from "./Pages/MainPage";
import EditUser from "./Components/DisplayItems/EditUser";
import Login from "./Pages/Login";
import AddVideo from "./Pages/AddVideo";
import AllVideos from "./Pages/AllVideos";
import AllVisaRequests from "./Pages/AllVisaRequests";
import AllBooks from "./Pages/AllBooks";
import AllGroups from "./Pages/AllGroups";
import AddGroup from "./Pages/AddGroup";
import AllBooksRequests from "./Pages/AllBooksRequests";
import EditVisaRequest from "./Components/DisplayItems/EditVisaRequest";
import EditGroup from "./Components/DisplayItems/EditGroup";
import EditBook from "./Components/DisplayItems/EditBook";
import EditBookRequest from "./Components/DisplayItems/EditBookRequest";
import EditVideo from "./Components/DisplayItems/EditVideo";

function App() {
  // const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        {true && (
          <Route path="/dashboard" element={<MainPage />}>
            <Route index element={<AllVideos />} />
            <Route path="/dashboard/videos" element={<AllVideos />} />
            <Route path="/dashboard/books" element={<AllBooks />} />
            <Route path="/dashboard/groups" element={<AllGroups />} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route
              path="/dashboard/book-requests"
              element={<AllBooksRequests />}
            />
            <Route
              path="/dashboard/visa-requests"
              element={<AllVisaRequests />}
            />

            <Route path="/dashboard/add-video" element={<AddVideo />} />
            <Route path="/dashboard/add-group" element={<AddGroup />} />

            <Route path="/dashboard/edit-user/:userId" element={<EditUser />} />
            <Route path="/dashboard/edit-book/:bookId" element={<EditBook />} />
            <Route
              path="/dashboard/edit-video/:videoId"
              element={<EditVideo />}
            />
            <Route
              path="/dashboard/edit-group/:groupId"
              element={<EditGroup />}
            />
            <Route
              path="/dashboard/edit-visaRequest/:visaRequestId"
              element={<EditVisaRequest />}
            />
            <Route
              path="/dashboard/edit-bookRequest/:bookRequestId"
              element={<EditBookRequest />}
            />
          </Route>
        )}
        {/* <Route exact path="/*" element={<> Error 404 | Page Not found </>} /> */}
      </Routes>
    </>
  );
}

export default App;
