const initialState = {

};

export const eventDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'WRITE_EVENT_DATA':
            handleWrite(action.payload.status, action.payload.date, action.payload.timeFrom, action.payload.timeTo, action.payload.title, action.payload.smallDescription, action.payload.bigDescription, action.payload.whereMeet, action.payload.additionallyText, action.payload.city, action.payload.complexity, action.payload.count, action.payload.amount, action.payload.currency, action.payload.pic1, action.payload.pic2, action.payload.pic3, action.payload.pic4, action.payload.pic5);
            return state;
        default:
            return state;
    }
};