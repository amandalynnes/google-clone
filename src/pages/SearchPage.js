import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";


function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  // const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>

        <div className="searchPage_headerBody">
          <Search hideButtons />

          <div className="searchPage_options">
              <div className="searchPage_optionsLeft">
                  <div className="searchPage_option">
                    <SearchIcon />
                    <Link to="/all">All</Link>
                    </div>
              </div>
              <div className="searchPage_optionsRight">
                  <div className="searchPage_option">
                    <SearchIcon />
                    <Link to="/all">All</Link>
                    </div>
              </div>
          </div>
        </div>
      </div>

      <div className="searchPage_results"></div>
    </div>
  );
}

export default SearchPage;
