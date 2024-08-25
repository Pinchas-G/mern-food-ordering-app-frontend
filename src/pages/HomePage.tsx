import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import MetaTags from "@/components/MetaTags";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchBarRef = useRef<HTMLDivElement>(null);

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  useEffect(() => {
    if (location.state?.scrollToSearch) {
      const intervalId = setInterval(() => {
        if (searchBarRef.current) {
          clearInterval(intervalId);
          searchBarRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          location.state.scrollToSearch = false;
        }
      }, 100);
    }
  }, [location.state?.scrollToSearch]);

  return (
    <>
      <MetaTags page="homePage" />
      <div className="flex flex-col gap-12  ">
        <div
          ref={searchBarRef}
          className="px-2 md:px-32 py-8 bg-white rounded-lg shadow-md flex flex-col gap-5 text-center -mt-16"
        >
          <h1 className="text-5xl font-bold tracking-tight text-orange-600">
            Tuck into a takeway today
          </h1>
          <span className="text-x1">Food is just a click away!</span>
          <SearchBar
            placeHolder="Search by City or Town"
            onSubmit={handleSearchSubmit}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <img src={landingImage} alt="landing image" />
          <div className="flex flex-col justify-center items-center gap-5 text-center">
            <span className="font-bold text-3xl tracking-tighter">
              Order takeway even faster!
            </span>
            <span>
              Download the FoodFood App for faster ordering and personalized
              recommendations
            </span>
            <img src={appDownloadImage} alt="app download image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
