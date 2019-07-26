import React from 'react';
import './App.scss';
import Lock from './lock'

class App extends React.Component {

  state = {
    numbers: [0,0,0,0],
    secretCode: '1111',
  }

changeNumOfDigits = (diff)=> {
  let newNumbers = []
  let newSecretCode = ''
    if (diff > 0) {
      newNumbers =  this.state.numbers.concat(0);
      newSecretCode = this.state.secretCode + '1';
    } else {
      newNumbers = this.state.numbers.slice(0, -1);
      newSecretCode = this.state.secretCode.slice(0, -1);
    }
    this.setState({
      numbers: newNumbers,
      secretCode: newSecretCode,
    })
  }

scrollBot = ()=> (window.scrollTo({
    top: (window.innerHeight), behavior: "smooth"
  }));

scrollTop = ()=> (window.scrollTo({
    top: (0), behavior: "smooth"
  }));

changeValue = (index, diff) => this.setState({
    numbers: this.state.numbers.map(( value, i )=>
      (i === index) ? (value + diff +10) % 10 : value)
  });

check = ()=> {
  const userCode = this.state.numbers.reduce((p, c)=>p+c.toString() ,'');
  userCode === this.state.secretCode ?
    this.setState({ isOpen: true, }) : this.setState({ isOpen: false, })
};


  render () {
    return (
      <div className="App">
        <div className='chooseLock'>
          <h1>The Lock</h1>
          <p>How much digits on The Lock do you want?</p>
          <button className='changeButtons' onClick={()=> this.changeNumOfDigits(1)}>more</button>
          <span className='codes'>{this.state.numbers.length}</span>
          <button className='changeButtons' onClick={()=> this.changeNumOfDigits(-1)}>less</button>
          <button className='changeButtons' onClick={()=> this.scrollBot()}>gooo..</button>
        </div>
        <div className='theLock'>
          <h1>The Lock</h1>
          <Lock opened={this.state.isOpen}/>
          <div className='numbers'>
            {[...Array(this.state.numbers.length)].map((digit, i)=> (
              <div className='number'>
                <button className='changeButtons' onClick={()=> this.changeValue(i, 1)}>up</button>
                <span className='codes'>{this.state.numbers[i]}</span>
                <button className='changeButtons' onClick={()=> this.changeValue(i, -1)}>dn</button>
              </div>
            ))}
          </div>
          <button className='check' onClick={this.check}>CHECK</button>
          <button className='toTheTop' onClick={()=> this.scrollTop()}>
            <img src='https://chistokrov.ru/assets/images/arrow-top.png' alt='tothetop' />
          </button>
        </div>
      </div>
    );
  }
}
export default App;
