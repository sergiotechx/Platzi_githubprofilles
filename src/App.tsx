import React, { Fragment } from "react";
import { GithubProfileCard } from './components/container/githubProfile'
import { GithubContextProvider } from './context/githubContext'

function App() {
  return (
    <Fragment>
      <GithubContextProvider>
       <GithubProfileCard/>
      </GithubContextProvider>
    </Fragment>


  )
}
export default App
