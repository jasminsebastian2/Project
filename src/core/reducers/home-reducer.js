

const initialState = {
    loading: false,
    error: false,
    message: [],
  }
  
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_HOME_SUCCESSFULLY':
        return {...state, ...action.payload}
      case 'GET_HOME_FAILED':
        return { ...state, error: action.error };
        
      default: return state;
    }
  }
  
  export default homeReducer;