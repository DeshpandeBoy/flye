import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

{this.state.data.map((image, i) => (
  <img
    key={i}
    className="col-3"
    src={image.pano}
    onClick={() => this.handleClick(image.pano)}
  />

  <div id="table table-striped">
  <table className="table" id="mytable">
    {this.state.data.map((data,i) => (
      <tbody key={i}>
        <tr key={i}>
          <td key={i}>{data.ifsc}</td>
          <td key={i}>{data.bank_name}</td>
          <td key={i}>{data.address}</td>
          <td key={i}>{data.city}</td>
          <td key={i}>{data.district}</td>
        </tr>
      </tbody>
    ))}
  </table>