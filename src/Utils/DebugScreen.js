/* global cast */
const castDebugLogger = cast.debug.CastDebugLogger.getInstance()

const DebugScreen = (enabled) => {
  cast.framework.CastReceiverContext.getInstance().addEventListener(
    cast.framework.system.EventType.READY,
    () => {
      if (!castDebugLogger.debugOverlayElement_) {
        console.log("debugger enabled")
        castDebugLogger.setEnabled(enabled)
        castDebugLogger.showDebugLogs(enabled)
      }
    }
  )
}

export default DebugScreen
