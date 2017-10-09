import React, { Component } from "react";
import List from "list.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: "",
      filteredList: [],
      selectValue: "BANGALORE"
    };
  }

  componentDidMount() {
    fetch(
      `https://app.fyle.in/api/bank_branches?city=${this.state
        .selectValue}&offset=0&limit=10`
    )
      .then(result => result.json())
      .then(data => this.setState({ data }));
  }

  _handleChange(event) {
    this.setState({
      name: event.target.value
    });
    this._filter(event.target.value.toUpperCase(), this.state.data);
  }

  _filter(input, data) {
    let filteredList = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].bank_name.includes(input)) {
        filteredList.push(data[i]);
        this.setState({ filteredList });
      }
    }
  }
  _handleSelection(e) {
    this.setState({ selectValue: e.target.value });
    fetch(
      `https://app.fyle.in/api/bank_branches?city=${this.state
        .selectValue}&offset=0&limit=10`
    )
      .then(result => result.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div className="container">
        <div id="dropdown">
          <select onChange={e => this._handleSelection(e)}>
            <option value="BANGLORE">Banglore</option>
            <option value="DELHI">Delhi</option>
            <option value="MUMBAI">Mumbai</option>
          </select>
          <div id="search">
            <input onChange={e => this._handleChange(e)} />
            <h3>Type bank name to searched</h3>
          </div>
          <div id="table test-list">
            <table className="table-striped table-hover" id="example">
              <tr className="thead-inverse">
                <th>IFSC</th>
                <th>Bank Name</th>
                <th>Branch</th>
                <th>Address</th>
                <th>City</th>
                <th>District</th>
                <th>State</th>
              </tr>
              <tbody>
                {this.state.name.length !== 0
                  ? this.state.filteredList.map((bank, i) => (
                      <tr key={i} className="pageit">
                        <td>{bank.ifsc}</td>
                        <td>{bank.bank_name}</td>
                        <td>{bank.branch}</td>
                        <td>{bank.address}</td>
                        <td>{bank.city}</td>
                        <td>{bank.district}</td>
                        <td>{bank.state}</td>
                      </tr>
                    ))
                  : this.state.data.map((bank, i) => (
                      <tr key={i}>
                        <td>{bank.ifsc}</td>
                        <td>{bank.bank_name}</td>
                        <td>{bank.branch}</td>
                        <td>{bank.address}</td>
                        <td>{bank.city}</td>
                        <td>{bank.district}</td>
                        <td>{bank.state}</td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
