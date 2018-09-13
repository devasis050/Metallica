import React from "react";
export {TradeComponent};

class TradeComponent extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <tr>
                <td>{this.props.trade.tradeDate}</td>
                <td>{this.props.trade.commodity}</td>
                <td>{this.props.trade.side}</td>
                <td>{this.props.trade.quantity}</td>
                <td>{this.props.trade.price}</td>
                <td>{this.props.trade.counterParty}</td>
                <td>{this.props.trade.location}</td>
                <td>{this.props.trade.currency}</td>
                <td>
                    <button onClick={this.props.deleteClickHandler} value='delete'>
                        <span className='glyphicon glyphicon-trash' />
                    </button>
                    <button value='edit' onClick={this.props.editClickHandler}><span className='glyphicon glyphicon-edit' /></button>   
                </td>
            </tr>
            
        )
    }
}