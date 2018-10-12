import React, { Component } from 'react';
import './css/index.css';
const COFNIG = {
  '--primary-color': '#ff1493',
  '--secondary-color': '#FFFF00',
  '--dark-grey-color': 'darkgrey',
  '--light-grey-color': 'lightgrey',
  '--white-color': 'white',
  '--black-color': 'black',
  '--font-family':'Arial',
  '--h2-font-size':'20px'
}
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      '--primary-color': '#ff1493',
      '--secondary-color': '#FFFF00',
    }
  }
  changeColor(e){
    let name = e.target.name;
    const value = e.target.value;
    this.setState({[name] : value})
      document.querySelector('body').style.setProperty(name,value);
  }
  componentDidMount(){
    for(let i in COFNIG){
      document.querySelector('body').style.setProperty(i, COFNIG[i]);
    }
  }
  render() {
    return (
      <div className="App">
      <div>
        <label>Change Primary Color</label><input name="--primary-color" type="color" onChange={this.changeColor.bind(this)} value={this.state['--primary-color']}/>
        <label>Change Secondary Color</label><input name="--secondary-color" type="color" onChange={this.changeColor.bind(this)} value={this.state['--secondary-color']} />
      </div>
       <div className="div1">Primary Color</div>
       <div className="div2">Secondary Color</div>
     </div>
    );
  }
}

export default App;
