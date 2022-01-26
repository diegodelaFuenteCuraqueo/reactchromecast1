import React, { useState, useEffect } from "react"
import debugCastEvents from '../Utils/debugCastEvents'
/* global dashjs, cast */
// const PROTOCOL = "urn:x-cast:org.dashif.dashjs";

const castDebugLogger = cast.debug.CastDebugLogger.getInstance()
const context = cast.framework.CastReceiverContext.getInstance()
const playerManager = context.getPlayerManager()

function Player() {
  useEffect(() => {
    playerManager.addEventListener(
      cast.framework.events.category.CORE,
      debugCastEvents
    )

    let DEBUG = true // true = muestra overlay con consola (sobre el video)
    context.addEventListener(cast.framework.system.EventType.READY, () => {
      if (!castDebugLogger.debugOverlayElement_) {
        castDebugLogger.setEnabled(DEBUG)
        castDebugLogger.showDebugLogs(DEBUG)
      }
    })

    context.start()
  }, [])

  return (
    <div style={{ border: "solid black 1px" }}>
      <cast-media-player id='player'></cast-media-player>
    </div>
  )
}

export default Player
