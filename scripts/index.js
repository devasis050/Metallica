import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../store/store"
import {intiAction} from "../action_creator/action"
import axios from "axios";
import ListComponent from "../component/listTradeComponent";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Transfers from '../component/transfers';
import Navigation from '../component/navigation'

class App extends React.Component{

    render() {
        return (

                
                <Provider store={store}>
                    
                    <BrowserRouter>
                    <div>
                    <Navigation/>
                        <Switch>
                            <Route path='/' component={ListComponent} exact></Route>
                            <Route path='/transfers' component={Transfers}></Route>
                        </Switch>
                    </div>
                    </BrowserRouter> 
                </Provider>

        )
    }
}


function loadData(response)
{
    store.dispatch(intiAction(response.data.trades))
}

axios.get("http://www.mocky.io/v2/5b95637a3200008700cdb6ea")
.then(loadData)
.catch(error => console.log(error));

//store.subscribe((t)=> console.log(store.getState().tradeReducer));

ReactDOM.render(<App/>, document.getElementById("content"));