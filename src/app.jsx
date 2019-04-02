import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    //Setting initial state here.
    this.state = {
      amountDue: " ",
      amountReceived: " ",
      changeDue: "Enter amount due and armount received on the left",
      twenties: "0",
      tens: "0",
      fives: "0",
      ones: "0",
      quarters: "0",
      dimes: "0",
      nickles: "0",
      pennies: "0",

    };

    //event binding for updating state values.
    this.updateAmountDue = this.updateAmountDue.bind(this);
    this.updateAmountReceived = this.updateAmountReceived.bind(this);

    //event binding for doing the calculations.
    this.handleClick = this.handleClick.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  updateAmountDue(e) {
    this.setState({
      amountDue: e.target.value
    });
  }
  updateAmountReceived(e) {
    this.setState({
      amountReceived: e.target.value
    });
  }
    //this is the JSX for the HTML to render.
  render() {
    <div className= "container">

      {/*header */}
      <div className="page-header">
        <h1 className="title-white">Change Calculator</h1>
      </div>
      
      {/*left Panel-user Input Area */}
      <div className="row">
        <div className="col-md-4">
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

    {/*Right Panel-Output Area */ }
    <div className="col-md-8 results-wrapper">
      {/*Alerts, Success, Failure */}
      <div className="panel -panel-default">
        <div className="panel-body">
          <div className="alert alert-success">
            {this.state.changeDue}
          </div>
        </div>
      </div>
    </div>
  }
}

export default App;
