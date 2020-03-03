const INITIAL_STATE={
    showCategoryBar:true
}

const categoryReducer=(state=INITIAL_STATE,action)=>
{
    switch(action.type)
    {
        case 'ENABLE_CATEGORY_BAR_SHOW':
            return{
                ...state,
                showCategoryBar:action.payload

            }

        default :
        return state
    }
}

export default categoryReducer