import { GoogleLoginResponse } from "react-google-login";

export const refreshTokenSetup = (res: GoogleLoginResponse) => {
  const defaultTimeOut = 3600 - 5 * 60;
  let refreshTiming = (res.tokenObj.expires_in || defaultTimeOut) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || defaultTimeOut) * 1000;

    console.log("newAuthRes: ", newAuthRes);
    console.log("new auth token", newAuthRes.id_token);

    setTimeout(refreshToken, refreshTiming);
  };

  setTimeout(refreshToken, refreshTiming);
};
