import { ActionType } from "../action_creator/action";

const tradeReducer = (state={trades:[]},action) => 
{
    switch(action.type)
    {
        case ActionType.INIT:
        {
            return {trades:action.payload};
        }
        case ActionType.DELETE:
        {
            let deleteTradeId = action.payload;
            let newTrades = state.trades.filter((trade)=> trade.tradeId !== deleteTradeId)
            let newState = Object.assign({}, state, {trades:newTrades});
            return newState;
        }
        case ActionType.ADD:
        {
            let newTrades = [...state.trades, action.payload]
            let newState = Object.assign({}, state, {trades:newTrades});
            return newState;
        }
        case ActionType.EDIT:
        {
            let newTrades = state.trades.map(trade=>{
                if(trade.tradeId === action.payload.tradeId)
                {
                    return Object.assign(trade, action.payload);
                }
                else
                {
                    return trade
                }
            })
            let newState = Object.assign({}, state, {trades:newTrades});
            return newState;
        }
        default :
            return state;
            //throw Error(`Action ${action.type} is not handled`)
    }

}

export {tradeReducer};