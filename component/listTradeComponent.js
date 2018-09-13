import React from "react";
import {connect} from "react-redux";
import {TradeComponent} from "./tradeComponent";
import {deleteTradeAction, addTradeAction, editTradeAction} from '../action_creator/action';
import {NewTrade} from '../component/newTradeComponent';

function mapStateToProps(state)
{
    return {
        trades: state.tradeReducer.trades
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        deleteTrade : (tradeId) => {
            dispatch(deleteTradeAction(tradeId))
        },
        addTrade : (newTrade) => {
            dispatch(addTradeAction(newTrade))
        },
        editTrade : (modifiedTrade) => dispatch(editTradeAction(modifiedTrade))
    }
}

class ListComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            displayTradeClass: 'col-sm-12',
            newTradeDisplay : {
                display:'none'
            },
        }
        this.showNewTrade = this.showNewTrade.bind(this)
        this.hideNewTrade = this.hideNewTrade.bind(this)
        this.addTradeHandler = this.addTradeHandler.bind(this);
        this.editTradeHandler = this.editTradeHandler.bind(this);
    }

    newTradeButtonHandler(tradeId)
    {
        let filteredTrades = this.props.trades.filter(trade=> trade.tradeId===tradeId)
        if(filteredTrades.length > 0)
        {
            let currentTrade = filteredTrades[0];
            this.setState({currentTrade:currentTrade})
        }
        this.showNewTrade()
    }

    showNewTrade()
    {
        let newState = {
            displayTradeClass: 'col-sm-8  table-responsive',
            newTradeClass:'col-sm-4',
            newTradeDisplay : {}
        }
        this.setState(newState); 
    }

    hideNewTrade()
    {
        let newState = {
            displayTradeClass: 'col-sm-12',
            newTradeDisplay : {display:'none'},
            currentTrade : {}
        }
        this.setState(newState);
    }

    addTradeHandler(newTrade)
    {
        this.props.addTrade(newTrade);
        this.hideNewTrade()
    }

    editTradeHandler(modifiedTrade)
    {
        this.props.editTrade(modifiedTrade);
        this.hideNewTrade();
    }

    render()
    {
        return (
            <div className="content">
                <div className='row'>
                    <div className={this.state.displayTradeClass}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Trade Date</th>
                                    <th>Commodity</th>
                                    <th>Side</th>
                                    <th>Qty(MT)</th>
                                    <th>Price(/MT)</th>
                                    <th>Counter Party</th>
                                    <th>Location</th>
                                    <th>Currency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.trades.map((trade)=> 
                                    {return (
                                        <TradeComponent 
                                            key={trade.tradeId} 
                                            deleteClickHandler={this.props.deleteTrade.bind(this,trade.tradeId)}
                                            editClickHandler={this.newTradeButtonHandler.bind(this,trade.tradeId)}
                                            trade={trade}/>
                                )})}
                            </tbody>
                        </table>
                        <button value='new' className="btn" onClick={this.newTradeButtonHandler.bind(this)}>
                            <span className="glyphicon glyphicon-plus"/>
                        </button>
                    </div>
                    <div className={this.state.newTradeClass} style={this.state.newTradeDisplay}>
                        <NewTrade 
                            hideNewTrade={this.hideNewTrade}
                            addTrade={this.addTradeHandler}
                            editTradeHandler={this.editTradeHandler} 
                            trade={this.state.currentTrade}/>
                    </div>
                </div>           
            </div>
        )
    }
}
//https://github.com/facebook/react/issues/4745
export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);