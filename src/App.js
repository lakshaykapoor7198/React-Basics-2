import React, { Component } from 'react';
import './App.css';
import unirest from 'unirest';
import Forme from './components/Forme'
class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  sh(id) {
    var paras = (id.paras!=""? id.paras : 1);
    var htm = (id.htm!=""? id.htm : false);
    console.log(id);
    this.setState({
      text: this.state.text,
      paras: paras,
      html: htm
    }, function () {
      var url = 'http://hipsterjesus.com/api?paras=' + paras + "&html=" + htm;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          
          let r = JSON.parse(xhttp.response);
          this.setState({
            text: r.text,
            paras: this.state.paras,
            htm: this.state.htm
          },function(){
            console.log(this.state);
          })
        }
      }.bind(this);
      xhttp.open('GET', url, false);
      xhttp.send();
    });



  }



  componentWillMount() {
    this.setState({
      text: "Input something first",
      htm: false,
      paras: 3
    });
  }

  render() {
    console.log();
    return (
      <div className="App">
        <center><h1 className='App-heading'>Text generator app</h1></center>
        <Forme s={this.sh.bind(this)} />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <center>
        <div class='jumbotron' className='texty'>
          {this.state.text}
        </div>
        </center>
      </div>
    );
  }
}

export default App;
