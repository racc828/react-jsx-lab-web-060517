import React from 'react';
import ReactDOM from 'react-dom';
import FillerText from './FillerText';



class Webpage extends React.Component {
  render() {
    return (
      <div>
        <p>"The world's coolest webpage"</p>
        <FillerText />
        <FillerText />
      </div>
    );
  }
}

export default Webpage;
