
//['receiverApplicationId'] = '3DB92025' 

import React, { useState, useEffect, useRef } from "react"
import debugCastEvents from '../Utils/debugCastEvents'
import DebugScreen from "../Utils/DebugScreen"
/* global cast */

const context = cast.framework.CastReceiverContext.getInstance()
const playerManager = context.getPlayerManager()

const Player = () => {

  const [castState, setCastState] = useState("")
  const container = useRef()
  const castMediaPlayer = useRef()

  const updateCastState = (state) => {
    setCastState(state.type)
    debugCastEvents(state)
  }

  useEffect(() => {
    DebugScreen(true)
    playerManager.addEventListener(
      cast.framework.events.category.CORE,
      updateCastState
    )
    context.start()
  }, [])

  console.log(castState)

  return (
    <div ref={container} >
      <cast-media-player ref={castMediaPlayer} ></cast-media-player>
    </div>
  )
}

export default Player
