import {takeEvery, put} from 'redux-saga/effects';
import {GET_MY_LIST} from './actionTypes';
import {getData} from './actions';
import axios from 'axios';

//generater 需要执行器, await async 自带
export default function* mySagas() {
  //在执行GET_MY_LIST 函数时,再 执行getList函数
  yield takeEvery(GET_MY_LIST, getList);
}

function* getList() {
  // console.log(666)
  let res= yield axios.get('http://localhost:3001/test');
  // console.log(res)
  let action= getData(res.data.data);
  yield put(action);
}