//再次练习 todolist
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      arr: ['你好', '哈哈', '哇哦'],
      value: ''
    }
    this.handleClick= this.handleClick.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.handleAdd= this.handleAdd.bind(this);
  }
  render() { 
    return (  
      <div>
        <h2>hello world</h2>
        <label htmlFor='input'>请输入</label>
        <input id='input' ref={input => {this.ref = input}} onChange={this.handleChange} value={this.state.value} />
        <button onClick={this.handleAdd}>+</button>
        <ul>
          {this.state.arr.map(item => {
            return (
              <div key={item}>
                <li onClick={this.handleClick}>
                  <div>{item}</div>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
  handleClick() {
    console.log('111')
  }
  handleChange() {
    console.log(this.ref.value)
    this.setState({
      value: this.ref.value
    })
  }
  handleAdd() {
    let arr = [...this.state.arr];
    arr.push(this.state.value);
    this.setState({
      arr: arr,
      value: ''
    })    
  }
}
export default App;