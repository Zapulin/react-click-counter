import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Button from './components/Button';
import Counter from './components/Counter';
import React from 'react'; 

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      numClicks: 0
    };
    this.clickController = this.clickController.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  clickController() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1}));
  }

  resetCounter() {
    this.setState({ numClicks: 0 });
  }

  render(){
    return (
      <div className="App">
        <div className='freecodecamp-logo-content'>
          <img 
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='freeCodeCamp Logo'/>
        </div>
        <div className='main-content'>
          <Counter numClicks={this.state.numClicks} />
          <Button 
            text='Click'
            isClickBtn={true}
            clickController={this.clickController} />
          <Button 
            text='Reniciar'
            isClickBtn={false}
            clickController={this.resetCounter} />  
        </div>
      </div>
    );
  }
}

/*
function App() {

  const [numClicks, setNumClicks] = useState(0);

  const clickController = () => {
    setNumClicks(numClicks + 1);
  };

  const resetCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-content'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='freeCodeCamp Logo'/>
      </div>
      <div className='main-content'>
        <Counter numClicks={this.state.numClicks} />
        <Button 
          text='Click'
          isClickBtn={true}
          clickController={clickController} />
        <Button 
          text='Reniciar'
          isClickBtn={false}
          clickController={resetCounter} />  
      </div>
    </div>
  );
}
*/

export default App;
