
export {ActionType, intiAction, deleteTradeAction, addTradeAction, editTradeAction};

const ActionType = {
    INIT:'Initialize App Data',
    DELETE: 'Delete Trade',
    ADD : 'Add new Trade',
    EDIT : 'Edit trade'
}

const intiAction = (data) => {
    return {type: ActionType.INIT, payload : data}
}

const deleteTradeAction = (tradeId) =>
{
    return {type:ActionType.DELETE, payload:tradeId}
}

const addTradeAction = (trade) => {return {type:ActionType.ADD, payload:trade}}

const editTradeAction = modifiedTrade => {return {type:ActionType.EDIT, payload:modifiedTrade}}


