import React, { useEffect } from 'react'
import firebase from'./firebase'

function App() {
  useEffect(()=>{
    const messaging = firebase.messaging();
    messaging.requestPermission()
    .then(function(){
      console.log('permission granted');
      return messaging.getToken();
    })
    .then(function(token){
      console.log(token);
    })
    .catch(function(err){
      console.log('error')
    })
    messaging.onMessage(function(payload){
      console.log('onMessage',payload);
    })
  })
  return (
    <div>
    <h1>welcome</h1>
      
    </div>
  )
}

export default App
