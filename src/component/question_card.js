import React, { Component } from 'react';
import {Card, WingBlank, WhiteSpace,Progress,Button,Icon,Pagination,Radio,List,Checkbox,Flex} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import '../css/mobile.css'
const data = [
    { value: 0, label: 'Ph.D.',checked:false },
    { value: 1, label: 'Bachelor',checked:false },
    { value: 2, label: 'College diploma' ,checked:false},
];
const CheckboxItem = Checkbox.CheckboxItem;
class QuestionCard extends Component {
    onChange = (val) => {
        console.log(val);
        var list = this.state.checkbox;
        for (var i = 0; i < this.state.checkbox.length; i++)
        {
            if (this.state.checkbox[i].value != val){
                list[i].checked = false;
            }
            else
                list[i].checked = true;
        }
        console.log(list);
        this.setState({
            "checkbox":list
        })
    }

    state = {
        "checkbox":[],
    }

    componentDidMount(){
        this.setState({
            "checkbox":data,
        })
    }
    render() {
        return (
            <WingBlank size="lg">
                <WhiteSpace size="lg" />
                <Card>
                    <Card.Header
                        title = {<Pagination mode="number" total={5} current={3} />}
                        extra = {<Button className="arrow-align" inline>下一题<Icon type = "right"/></Button>}>
                    </Card.Header>
                    <Card.Body>
                        <div>This is content of `Card`</div>
                        <List>
                            {this.state.checkbox.map(i => (
                                <CheckboxItem checked={i.checked} key={i.value} onChange={() => this.onChange(i.value)}>
                                    {i.label}
                                </CheckboxItem>
                            ))}
                        </List>
                    </Card.Body>
                    <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
                <WhiteSpace size="lg" />
            </WingBlank>
        );
    }
}

export default QuestionCard;
