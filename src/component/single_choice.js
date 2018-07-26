import React, { Component } from 'react';
import {Card, WingBlank, WhiteSpace,Progress,Button,Icon,Pagination,Radio,List,Checkbox,Flex} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import '../css/mobile.css'
const data = [
    { value: 0, label: '希腊雅典',checked:false },
    { value: 1, label: '奥林匹斯山',checked:false },
    { value: 2, label: '古巴比伦' ,checked:false},
    { value: 3, label: '埃及', checked:false},
];
const CheckboxItem = Checkbox.CheckboxItem;
class SingleChoice extends Component {
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
                        <div className='testDiv'>（单选题）奥林匹克运动的发祥地在何处？</div>
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

export default SingleChoice;
