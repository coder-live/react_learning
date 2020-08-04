import React, { PureComponent } from 'react';
import store from './store';
import {getMyList, 
  handleChangeAction, 
  handleAddAction, 
  handleDeleteAction
} from './store/actions'

class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    // this.state = {  
    //   arr: []
    // }
    this.state = store.getState();

    this.handleChange= this.handleChange.bind(this);
    this.handleAdd= this.handleAdd.bind(this);
    this.storeChange= this.storeChange.bind(this);
    //订阅追踪数据
    store.subscribe(this.storeChange)

  }
  render() { 
    return (  
      <div>
        <input
          ref={(input)=>{this.ref=input}}
          placeholder={this.state.defaultValue}
          onChange= {this.handleChange}
          value= {this.state.value}
        />
        <button onClick={this.handleAdd}>+</button>
        <ul>
          {this.state.arr.map((item,index) => (
            <li 
              key={item+index}
              onClick={this.handleDelete.bind(this,index)}
            >{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  handleChange() {
    let value= this.ref.value;
    let action= handleChangeAction(value);
    store.dispatch(action);
  }
  handleAdd() {
    // let arr= [...this.state.arr];
    // arr.push(this.state.value);
    // console.log(arr)
    let action= handleAddAction();
    store.dispatch(action);
  }
  handleDelete(index) {
    // let arr= [...this.state.arr];
    // arr.splice(index, 1);
    // let action= {
    //   type: 'delete',
    //   arr
    // }
    let action= handleDeleteAction(index);
    store.dispatch(action);
  }
  //订阅
  storeChange() {
    console.log('订阅')
    this.setState(store.getState());
  }

  componentDidMount() {
    // console.log(this.state)
    // console.log('请求数据')
    this.getData();
  }
  getData() {
    let action = getMyList();
    // console.log('333')
    store.dispatch(action)
    // console.log('7333')
  }
}
export default TodoList;