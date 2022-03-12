import { combineReducers} from "redux";
let value = ''
const typingtextReducer = (state = value,action)=>{
  if(action.type == ''){
    state =  action.payload
    return state
}else if(action.type == "TYPING_TEXT"){
  state = action.payload
  return state
}else{
   return state
}
}
const rootReducer = combineReducers({
    typingtext: typingtextReducer
})

export default rootReducer