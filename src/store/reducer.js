const initialState ={
    toggleTheme:false,
    color:'color-blue',
    theme:'light',
    dataTable:[]
}

const reducer=(state=initialState,action) => {
    console.log(state,action);
    switch (action.type) {
        case 'Toggle_Theme':
            return {
                ...state,
                toggleTheme:action.payload
            }
        case 'Select_Color':
            return{
                ...state,
                color:action.payload
            }
        case 'Select_Theme':
            return{
                ...state,
                theme:action.payload
            }
        case 'Load_Data_Table':
            return{
                ...state,
                dataTable:action.payload
            }
        default:
            return state;
    }

}
export default reducer