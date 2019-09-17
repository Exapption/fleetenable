  import React from 'react'
  import { Switch, Route } from 'react-router-dom'
  import HomePageContainer from '././javascript/containers/HomePageContainer'
  import StartUpsPageContainer from '././javascript/containers/StartUpsPageContainer'
  import AboutPageContainer from '././javascript/containers/AboutPageContainer'
  import RetailPageContainer from './javascript/containers/RetailPageContainer';
  import TransLogisticPageContainer from './javascript/containers/TransLogisticPageContainer';
  import ContactUsPageContainer from './javascript/containers/ContactUsPageContainer';
  

  // The Main component renders one of the three provided
  // Routes (provided that one matches). Both the /roster
  // and /schedule routes will match any pathname that starts
  // with /roster or /schedule. The / route will only match
  // when the pathname is exactly the string "/"

  const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={HomePageContainer}/>
        <Route path='/startups' component={StartUpsPageContainer}/>
        <Route path='/industries/retail' component={RetailPageContainer}/>
        <Route path='/industries/transport' component={TransLogisticPageContainer}/>
        <Route path='/about' component={AboutPageContainer}/>
        <Route path='/contactus' component={ContactUsPageContainer}/>
      </Switch>
    </main>
  )

  export default Main
