// /* eslint-disable react-refresh/only-export-components */
import React from "react";
import PathConstants from "./constants";

const Search = React.lazy(() => import("pages/Search"));

const routes = [
    { 
      path: PathConstants.SEARCH,
      element: <Search /> 
    },
];

export default routes;