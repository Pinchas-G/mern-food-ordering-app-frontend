import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { SheetClose } from "./ui/sheet";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/order-status"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        <SheetClose>Order Status</SheetClose>
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        <SheetClose>Manage Restaurant</SheetClose>
      </Link>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        <SheetClose> User Profile</SheetClose>
      </Link>
      <Button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="flex items-center px-3 font-bold hover:bg-gray-500"
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
