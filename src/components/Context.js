import React from "react";

export const LocalContext = React.createContext({
    re_render: false,
    setRe_Render: (state) => {}
});