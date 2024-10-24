// /* eslint-disable react-refresh/only-export-components */
import React from "react";
import PathConstants from "./constants";

const Search = React.lazy(() => import("pages/Search"));
const Results = React.lazy(() => import("pages/Results"));
const Bookmarks = React.lazy(() => import("pages/Bookmarks"));

const routes = [
    { 
      path: PathConstants.SEARCH,
      element: <Search /> 
    },
    { 
      path: PathConstants.RESULTS,
      element: <Results /> 
    },
    { 
      path: PathConstants.BOOKMARKS,
      element: <Bookmarks /> 
    },
];

export default routes;