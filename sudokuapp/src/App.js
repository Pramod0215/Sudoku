import React, { Component } from 'react';
import './App.css';

class Box extends Component {
  constructor(props) {
    super(props);
    
    this.state =
      {
        count :1,
        color: '#ccc',
        disabled: false,
        
      
      };
    
  }

  checkAnswer(useranswer){
    if(this.props.answer == useranswer)
    {
      this.setState(
        {
          color:'#ccc',
          disabled: true
        }
      )

    }
   else if(this.props.answer !== useranswer && useranswer!=''){
     this.props.countWrong();
      if(this.state.count == 1)
      {
        this.setState(
          {
            color:'green',
            count:2
          }
        )

      }

      else if(this.state.count == 2)
      {
        this.setState(
          {
            color:'yellow',
            count:3
          }
        )

      }

      else if(this.state.count == 3)
      {
        this.setState(
          {
            color:'red',
            count:4,
            disabled :true
          }
        )

      }
   
    }
    
     
      }




  render(){
      return (
        <div className='grid-box'>
          {this.props.number ? (
            <div className='Box' > {this.props.number}</div>
          ) : (

                  <input type='text' value={this.state.value} style={{backgroundColor:this.state.color}} 
                  onChange={(event)=> this.checkAnswer(event.target.value)}  disabled={(this.state.disabled)? 'disabled':''} maxLength={1} />
                )
          }
        </div>
      )


    }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      attempt: 0
    }
    this.incorrectAttempt = this.incorrectAttempt.bind(this)
  }

  incorrectAttempt(){
    this.setState(
      {
        attempt:this.state.attempt+1
      }
    )
  }

  render() {
    return (
      <div className="App">
        <div className="line">
          <div className="Box1-row">

            <Box number={3} />
            <Box answer={1} countWrong={this.incorrectAttempt} />
            <Box answer={4} countWrong={this.incorrectAttempt}/>
            <Box number={2} />
          </div>
       
          <div className="Box1-row">
            <Box answer={2} countWrong={this.incorrectAttempt}/>
            <Box number={4} />
            <Box number={1} />
            <Box answer={3} countWrong={this.incorrectAttempt}/>

          </div>
        </div>
        <div className="line">
          <div className="Box1-row">
            <Box answer={1} countWrong={this.incorrectAttempt}/>
            <Box number={3} />
            <Box number={2} />
            <Box answer={4} countWrong={this.incorrectAttempt}/>

          </div>
       
          <div className="Box1-row">
            <Box number={4} />
            <Box answer={2} countWrong={this.incorrectAttempt}/>
            <Box answer={3} />
            <Box number={1} countWrong={this.incorrectAttempt}/>
          </div>
        </div>
      <h1>Total incorrect Attempts : {this.state.attempt}</h1>
      </div>

    );
  }
}

export default App;