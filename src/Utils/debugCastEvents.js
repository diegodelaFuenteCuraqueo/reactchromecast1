/* global cast */
const castDebugLogger = cast.debug.CastDebugLogger.getInstance()

const debugCastEvents = (event) => {
  castDebugLogger.warn("REACT", "### CORE ### : " + JSON.stringify(event))
}

export default debugCastEvents
