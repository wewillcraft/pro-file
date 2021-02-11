import { useGoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

export const LogoutButton = () => {
  const onLogoutSuccess = () => {
    alert("Logged out successfully!");
  };

  const onFailure = () => {
    console.log("Logout failed.");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button
      onClick={signOut}
      className="bg-gray-200 rounded-xl py-2 px-4 inline-flex text-gray-800 hover:bg-gray-400"
    >
      <span>Sign out</span>
    </button>
  );
};
