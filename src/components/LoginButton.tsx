import {
  useGoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

import { refreshTokenSetup } from "../utils/refreshTokenSetup";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

const isOnline = (res: any): res is GoogleLoginResponse => {
  if ((res as GoogleLoginResponse).profileObj) {
    return true;
  }
  return false;
};

const isOffline = (res: any): res is GoogleLoginResponseOffline => {
  if ((res as GoogleLoginResponseOffline).code) {
    return true;
  }
  return false;
};

export function LoginButton() {
  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if (isOnline(res)) {
      console.log("Login success: currentUser:", res.profileObj);
      refreshTokenSetup(res);
    } else if (isOffline(res)) {
      console.log("Offline");
    }
  };

  const onFailure = (res: any) => {
    console.log("Login failed: res: ", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <button
      onClick={signIn}
      className="bg-gray-700 rounded-xl py-2 px-4 inline-flex text-white"
    >
      <span>Sign in with Google</span>
    </button>
  );
}
