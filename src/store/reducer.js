//管理者 => reducer只能接受state, 不能改变
import {GET_DATA, CHANGE_INPUT, ADD, DELETE} from './actionTypes';
const defaultState= {
  defaultValue: '请输入',
  arr: [],
  value: ''
};

export default (state = defaultState, action) => {
  // console.log(state)
  if(action.type === GET_DATA) {
    let newState= JSON.parse(JSON.stringify(state));
    newState.arr= action.data;
    return newState
  }
  if(action.type === CHANGE_INPUT) {
    let newState= {...state};
    newState.value= action.value;
    return newState
  }
  if(action.type === ADD) {
    let newState= JSON.parse(JSON.stringify(state));
    // console.log(newState===state)
    newState.arr.push(newState.value);
    newState.value= '';
    return newState
  }
  if(action.type === DELETE) {
    let newState= JSON.parse(JSON.stringify(state));
    // newState.arr = action.arr;
    newState.arr.splice(action.index, 1);
    // console.log(newState)
    return newState
  }
  return state
}