import React, { useEffect, useState } from "react";

export interface ResponsiveBoxProps {
  height: number;
  width: number;
  boxClass?: string;
  children: React.ReactNode;
}

export function ResponsiveBox(props: ResponsiveBoxProps) {
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "100vw",
        maxWidth: "100vw",
        minHeight: "100vh",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          height: props.height,
          minHeight: props.height,
          width: props.width,
          minWidth: props.width,
          transform: `scale(${
            windowSize.innerWidth / props.width >
            windowSize.innerHeight / props.height
              ? windowSize.innerHeight / props.height
              : windowSize.innerWidth / props.width
          } )`,
        }}
        className={props.boxClass}
      >
        {props.children}
      </div>
    </div>
  );
}
