import React from 'react';
import './App.css';

class App extends React.Component{
    render(){
      return(
        <div className="container">
            <div id="task-container">
              <div id="form-wrapper">
                <form id='form'>
                  <div className='flex-wrapper'>
                    <div style={{flex:6}}>
                      <input className="form-control" id="title" name="title" placeholder="Input task title"/>
                    </div>
                    <div>
                      <input id="submit" className="btn btn-warning" type="submit" name="Add"/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </div>
      )
    }

}


export default App;
