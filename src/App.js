import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import QuestionCard from './component/question_card'

class App extends Component {
  render() {
    return (
        <QuestionCard/>
    );
  }
}

export default App;
