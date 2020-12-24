import React, { useState, useEffect, useCallback } from 'react';

export const Blink = (props) => {
    const [showlabel, setShowLabel] = useState(true);

    const handleSHowLabel = useCallback(() => {
        setShowLabel((prevShowLabel) => !prevShowLabel);
    }, [setShowLabel])

    useEffect(() => {
        let timer = setInterval(() => {
            handleSHowLabel();
        }, 0.25);
  
        return () => clearTimeout(timer);
    }, []);

    return(
        <div className="react-blink">{showlabel ? props.children : null}</div>
    )
}