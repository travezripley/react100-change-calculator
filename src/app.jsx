import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    //Setting initial state here.
    this.state ={

    };
  }
    //this is the JSX for the HTML to render.
  render() {
    <div className= "container">

      {/*header */}
      <div className="page-header">
        <h1 className="title-white">Change Calculator</h1>
      </div>
      
      {/*left panel-user input area */}
      <div className="row">
        <div className="col-4">
          <div className="panel panel-default">
            <div className="panel-heading">Enter Information</div>
            <div className="panel-body">

              <div className="form-group">
                <label for="amountDue">How much is due?</label>
              </div>

              <div className="form-group">
                <label for="amountReceived">How much was received?</label>
              </div>

              <div className="panel-footer">
                <button name="button">Calculate</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default App;
