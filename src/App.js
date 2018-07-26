import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import './css/mobile.css'
import SingleChoice from './component/single_choice'
import MultipleChoice from './component/multiple_choice'

const mockdata = {
    'errcode': '0',
    'id': '5',
    'description':  '大一新生数学',
    'deadline': '2018-08-10 00:00:00',
    'number': '300',
    'questions': [
        {
            'id': '10',
            'description': '树叶的一生只是为了归根吗',
            'answers': [
                {
                    'id': '24',
                    'description': '是',
                'label': '1'
                },
                {
                    'id': '26',
                    'description':'不是',
                'label': '0'
                },
            ]
        },
        {
            'id': '18',
            'description': '树叶的一生只是为了归根吗',
            'answers': [
                {
                    'id': '32',
                    'description': '是',
                'label': '1'
                },
                {
                    'id': '33',
                    'description': '不是',
                'label': '0'
                },
            ]
        }
    ]
}
class App extends Component {
  render() {
    return (
        <div className='layout-top'>
          <MultipleChoice/>
        </div>
    );
  }
}

export default App;
