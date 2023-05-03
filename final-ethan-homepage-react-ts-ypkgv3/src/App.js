import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import banners from './pages/HomePage'

import AboutPage from './pages/AboutPage'
import PageNotFound from './pages/PageNotFound'

const App = ({ className }) =>
  <div className={className}>
    <Navbar />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route component={PageNotFound} />
    </Switch>
  </div>

export default styled(App)`

`