import React from 'react';

export {NewTrade};

class NewTrade extends React.Component
{
    onSubmitHandler(event)
    {
        event.preventDefault();

        let tradeStatus = this.props.trade ? this.props.trade.tradeStatus : "New";
        
        let newTrade = {
            "tradeDate" : document.querySelector('#newTradeDate').value,
            "commodity" : document.querySelector('#newTradeCommodity').value,
            "side" : document.querySelector("input[name='buysellradio']:checked").value,
            "quantity" : document.querySelector('#newTradeQuantity').value,
            "price" : document.querySelector('#newTradePrice').value,
            "counterParty" : document.querySelector('#newTradeCounterparty').value,
             "location" : document.querySelector('#newTradeLocation').value,
            "tradeStatus" : tradeStatus,
            "currency" : document.querySelector('#newTradeCurrency').value
        }

        if(this.props.trade && this.props.trade.tradeId)
        {
            let modifiedTrade = Object.assign(this.props.trade, newTrade)
            this.props.editTradeHandler(modifiedTrade)
        }
        else
        {
            this.props.addTrade(newTrade);
        }
        event.currentTarget.reset();
    }

    

    render()
    {
        let currentTrade = this.props.trade ? this.props.trade : {};
        let tradeDate = currentTrade.tradeDate ? currentTrade.tradeDate.slice(0,10): '';
        return (
            <form onSubmit={this.onSubmitHandler.bind(this)} className='form-horizontal'>
                <div className='panel panel-default'>
                    <div className='panel-heading'> Trade Id: {currentTrade.tradeId ? currentTrade.tradeId : 'New'}
                    </div>
                    <div className='panel-body'>
                        <label>
                            Trade Date : <input type='date' id='newTradeDate' defaultValue={tradeDate} required/>
                        </label>
                        <br/>
                        <label>
                            Commodity : <input type='text' id='newTradeCommodity' defaultValue={currentTrade.commodity} required/>
                        </label>
                        <br/>
                        <label className="control-label">Side :</label> 
                        <label className='radio-inline'>
                            <input type='radio' name='buysellradio' value='Buy' defaultChecked ={currentTrade.side !== "Sell"} required/>Buy
                        </label>
                        <label className='radio-inline'>
                            <input type='radio' name='buysellradio' value='Sell' defaultChecked ={currentTrade.side === "Sell"} required/>Sell
                        </label>
                        <br/>
                        <label>
                        Counterparty: <input type='text' id='newTradeCounterparty' defaultValue={currentTrade.counterParty} required/>
                        </label>
                        <br/>
                        <label>
                        Price: <input type='text' id='newTradePrice' defaultValue={currentTrade.price} required />
                        </label>
                        <br/>
                        <label>
                        Currencly: <input type='text' id='newTradeCurrency' defaultValue={currentTrade.currency} required/>
                        </label>
                        <br/>
                        <label>
                        Quantity: <input type='text' id='newTradeQuantity' defaultValue={currentTrade.quantity} required />
                        </label>
                        <br/>
                        <label>
                        Location: <input type='text' id='newTradeLocation' defaultValue={currentTrade.location} required/>
                        </label>
                        <br/>
                        <button className='btn button-secondary' type='reset' onClick={this.props.hideNewTrade} >Cancel</button>
                        <button type='submit' className='btn btn-primary'>Save</button>
                    </div>
                </div>
                
            </form>
        )
    }
}