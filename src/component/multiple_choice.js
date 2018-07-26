import React, { Component } from 'react';
import {Card, WingBlank, WhiteSpace,Progress,Button,Icon,Pagination,Radio,List,Checkbox,Flex} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import '../css/mobile.css'
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
            'description': '树叶的一生只是为了归根吗(第二题)',
            'answers': [
                {
                    'id': '32',
                    'description': '是（第二题）',
                    'label': '1'
                },
                {
                    'id': '33',
                    'description': '不是（第二题）',
                    'label': '0'
                },
            ]
        }
    ]
}
const data = [
    { value: 0, label: '希腊雅典',checked:false },
    { value: 1, label: '奥林匹斯山',checked:false },
    { value: 2, label: '古巴比伦' ,checked:false},
    { value: 3, label: '埃及', checked:false},
];
const CheckboxItem = Checkbox.CheckboxItem;
class MultipleChoice extends Component {
    onChange = (val) => {
        console.log(val);
        var list = this.state.checkbox;
        for (var i = 0; i < this.state.checkbox.length; i++)
        {
            if (this.state.checkbox[i].value == val){
                list[i].checked = !(list[i].checked);
            }
        }
        console.log(list);
        this.setState({
            "checkbox":list
        })
    }

    state = {
        "sum":0,
        "number":0,
        "checkbox":[],
        "paper":{},
        "question":"",
    }

    componentDidMount(){
        var checklist = [];
        for (var i = 0; i < mockdata.questions[0].answers.length; i++){
            var checkjson = {
                "value": mockdata.questions[0].answers[i].id,
                "label": mockdata.questions[0].answers[i].description,
                "checked":false,
            };
            checklist.push(checkjson);
        }
        this.setState({
            "checkbox":checklist,
            "paper":mockdata,
            "sum":mockdata.questions.length,
            "question":mockdata.questions[0].description,
            "number":1,
        })
    }

    nextquestion=()=>{
        var num = this.state.number + 1;
        var checklist = [];
        for (var i = 0; i < mockdata.questions[num-1].answers.length; i++){
            var checkjson = {
                "value": mockdata.questions[num-1].answers[i].id,
                "label": mockdata.questions[num-1].answers[i].description,
                "checked":false,
            };
            checklist.push(checkjson);
        }
        this.setState(
            {
                "checkbox":checklist,
                "question":mockdata.questions[num-1].description,
                "number": num,
            }
        )
    }
    render() {
        return (
            <WingBlank size="lg">
                <WhiteSpace size="lg" />
                <Card>
                    <Card.Header
                        title = {<Pagination mode="number" total={this.state.sum} current={this.state.number} />}
                        extra = {<Button className="arrow-align" inline onClick = {this.nextquestion}>下一题<Icon type = "right"/></Button>}>
                    </Card.Header>
                    <Card.Body>
                        <div className='testDiv'>{this.state.question}</div>
                        <List>
                            {this.state.checkbox.map(i => (
                                <WingBlank size="lg">
                                    <CheckboxItem checked={i.checked} key={i.value} onChange={() => this.onChange(i.value)}>
                                        <span className="checkbox-item">{i.label}</span>
                                    </CheckboxItem>
                                </WingBlank>
                            ))}
                        </List>
                    </Card.Body>
                    <Card.Footer
                        content = {<div className="card-footer"></div>}>
                    </Card.Footer>
                </Card>
                <WhiteSpace size="lg" />
            </WingBlank>
        );
    }
}

export default MultipleChoice;
