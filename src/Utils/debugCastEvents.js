/* global cast */
const castDebugLogger = cast.debug.CastDebugLogger.getInstance()

const debugCastEvents = (event) => {
  castDebugLogger.warn("REACT", "### CORE ### : " + JSON.stringify(event))
  if(event.type === "REQUEST_LOAD"){
    console.log("REQ LOAD")
  }
}

export default debugCastEvents
