/* global cast */

const CHROMECAST_EVENTS = [
  "REQUEST_FOCUS_STATE",
  "BUFFERING",
  "REQUEST_PLAY",
  "PLAY",
  "REQUEST_PAUSE",
  "PAUSE",
  "REQUEST_SEEK",
  "SEEKED",
  "SEEKING",
  "ENDED",
]

const debugCastEvents = (event) => {
  const castDebugLogger = cast.debug.CastDebugLogger.getInstance()

  castDebugLogger.warn("REACT", "### CORE ### : " + JSON.stringify(event))
  const eventIndex = CHROMECAST_EVENTS.indexOf(event.type)

  if (eventIndex > -1) {
    castDebugLogger.info(" * * " + CHROMECAST_EVENTS[eventIndex] + " * * ")
  }
}

export default debugCastEvents
