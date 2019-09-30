import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import ProductType from '../components/product/ProductType'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/productType' component={ProductType} / >
        <Redirect from='*' to='/' />
    </Switch>