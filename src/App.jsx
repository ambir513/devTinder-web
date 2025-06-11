import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Body from "./Body";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Profile from "./components/Profile";
import ForgetPassword from "./components/ForgetPassword";
import EditProfile from "./components/EditProfile";
import Feed from "./components/Feed";
import ConnectionRequest from "./components/ConnectionRequest";
import { lazy, useEffect } from "react";
import MyConnection from "./components/MyConnection";
import UserAccount from "./components/UserAccount";
import FeedbackForm from "./components/feedbackForm";
import PremiumCard from "./components/PremiumCard";
import { messaging } from "./utils/firebase";
import { getToken } from "firebase/messaging";

const ChatLazy = lazy(() => import("./components/Chat"));

function App() {
  async function requestNotificationPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("✅ Notification permission granted.");

      // Get FCM token
      const token = await getToken(messaging, {
        vapidKey:
          "BM0epXF86D1Kay5EZJRjdivGfwHIBq_CixIYdGpvyq7Wtkt8kUNdVnmcwzkkdzEMtawB3wyKRLp_t_ACU3HbQoc", // get this from Firebase Console > Cloud Messaging
      });
      console.log(token);
      if (token) {
        // Save token to your backend
      } else {
        console.log("⚠️ No token received.");
      }
    } else {
      console.log("❌ Notification permission denied.");
    }
  }

  useEffect(() => {
    requestNotificationPermission();
  }, []);
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/chat/:_id" element={<ChatLazy />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/premium" element={<PremiumCard />} />
            <Route
              path="/user/request/received"
              element={<ConnectionRequest />}
            />
            <Route path="/profile/:userName" element={<UserAccount />} />
            <Route path="/connection" element={<MyConnection />} />
            <Route
              path="/accounts/password/reset"
              element={<ForgetPassword />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
