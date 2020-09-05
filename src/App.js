import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { Authenticator} from 'aws-amplify-react'
import AuthWrapper from './Components/AuthWrapper';
import awsExports from "./aws-exports";
import InternalApp from './Components/InternalApp';
import  "./css/tailwind.css"

Amplify.configure(awsExports);

const MyTheme = {
  button: {backgroundColor: "green", borderColor: "red"} ,
  singInButtonIcon: {display: "none"}
}


const App = () => {
  
  return (
    <div >
     <Authenticator hideDefault={true} amplifyConfig={awsExports}>
      <AuthWrapper/>
     </Authenticator>
    </div>
  )
}

export default App;
