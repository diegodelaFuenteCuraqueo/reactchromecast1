/* global cast */
const castDebugLogger = cast.debug.CastDebugLogger.getInstance()

const debugCastEvents = (event) => {
  castDebugLogger.warn("REACT", "### CORE ### : " + JSON.stringify(event))
  castDebugLogger.warn(event.type+" "+event.senderId)
  cast.framework.sendCustomMessage("urn:x-cast:com.example.cast.mynamespace", event.senderId, event.type)
}

export default debugCastEvents
