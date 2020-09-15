import React, { createContext, useState } from 'react';

export const KurvTilføj = createContext();

const KurvTilføjNu = (props) => {
    const [apple, setAppel] = useState ([]);

    return (
        <KurvTilføj.Provider value={{ apple, setAppel}}>
            {props.children}
        </KurvTilføj.Provider>
    );
};

export default  KurvTilføjNu;