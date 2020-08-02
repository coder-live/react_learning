import {GET_DATA, CHANGE_INPUT, ADD, DELETE} from './actionTypes';

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