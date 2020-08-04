import {GET_MY_LIST, GET_DATA, CHANGE_INPUT, ADD, DELETE} from './actionTypes';
// import axios from 'axios';

export const getData= (data) => (
  {
    type: GET_DATA,
    data
  }
)
export const handleChangeAction= (value) => (
  {
    type: CHANGE_INPUT,
    value
  } 
)
export const handleAddAction= () => (
  {
    type: ADD
  }
)
export const handleDeleteAction= (index) => (
  {
    type: DELETE,
    index
  }
)
// -> redux-thuk
// export const getTodoList= () => {
//   return (dispatch) => {
//     axios.get('http://localhost:3001/test').then(res=> {
//       // console.log(res);
//       let arr= res.data.data || [];
//       let action= getData(arr);
//       // console.log('00')
//       dispatch(action)
//     }).catch(_=>{console.log('请求失败')})
//   }
// }

//-> redux-saga
export const getMyList= () => (
  {
    type: GET_MY_LIST
  }
)