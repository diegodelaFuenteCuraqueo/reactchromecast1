import React, { useState, useEffect } from "react";

/* global dashjs, cast */
// const PROTOCOL = "urn:x-cast:org.dashif.dashjs";

const context = cast.framework.CastReceiverContext.getInstance();

function Player() {

  useEffect(() => {
    context.start();
  }, []);

  return (
    <div style={{ border: "solid black 1px" }}>
      <video autoPlay="false" style={ getWindowDimensions() } />
    </div>
  );
}

export default Player;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

