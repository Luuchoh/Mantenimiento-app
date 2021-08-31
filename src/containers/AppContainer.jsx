import React from 'react'
import { Provider } from 'react-redux'
import {store} from '../store/store'

import 'bootswatch/dist/sketchy/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import AppRouter from '../routers/AppRouter'

const AppContainer = () => {

    return (
        <Provider store={store}>
           <AppRouter />
        </Provider>
    )
}

export default AppContainer
