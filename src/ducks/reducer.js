const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";

function reducer( state = initialState, action){
    switch(action.type){
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loantype: action.payload});
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType: action.payload})
        default: return state;
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload})
    }
}
export function updateLoanType(loanType){
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}
export function updatePropertyType(property){
    return{
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}
export function updateCity(city){
    return{
        type: UPDATE_CITY,
        payload: city
    }
};

export default reducer;