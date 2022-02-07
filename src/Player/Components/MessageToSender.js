
const MessageToSender = (NAMESPACE, context, event) => {
  try{
    context.sendCustomMessage(NAMESPACE, event.senderId, event)
  }catch(error){
    console.log(`ERROR :${error}`)
  }
}

export default MessageToSender
