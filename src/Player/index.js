/* global cast */
//['receiverApplicationId'] = '3DB92025' 

import React, { useState, useEffect } from "react"
// import debugCastEvents from '../Utils/debugCastEvents'
// import DebugScreen from "../Utils/DebugScreen"
import MessageToSender from "./Components/MessageToSender";
import CastMediaPlayer from "./Components/CastMediaPlayer";

const NAMESPACE =  'urn:x-cast:com.example.cast.events';
const context = cast.framework.CastReceiverContext.getInstance()
const playerManager = context.getPlayerManager()

const Player = () => {
  const [castState, setCastState] = useState("")

  const updateCastState = (state) => {
    setCastState(state.type)
    MessageToSender(NAMESPACE, context, state)
    //debugCastEvents(state)
  }

  useEffect(() => {
    // DebugScreen(true)
    playerManager.addEventListener(
      cast.framework.events.category.CORE,
      updateCastState
    )

    context.addCustomMessageListener(NAMESPACE, (customEvent) => {
      console.log(customEvent)
      //...TODO
    })

    context.start()
  }, [])

  return (
    <>
      <CastMediaPlayer />
    </>
  )
}

export default Player
