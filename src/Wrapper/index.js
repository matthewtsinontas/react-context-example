import React, { useEffect } from 'react';

const colors = {
    1: "#FFFFFF",
    2: "#EEEEEE",
    3: "#DDDDDD"
}

const renderCount = {
    1: 0,
    2: 0,
    3: 0
}

const Wrapper = ({ children, level }) => {
    // Updating render counts
    useEffect(() => {
        renderCount[level]++;
    });

    return (
        <div style={{ border: "1px solid black", backgroundColor: colors[level], padding: "20px"}}>
            <p>Render count: {renderCount[level]}</p>
            {children}
        </div>
    )
};

export default Wrapper;