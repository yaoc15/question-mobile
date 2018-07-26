import React, { Component } from 'react';
import {Card, WingBlank, WhiteSpace,Progress,Button,Icon,Pagination} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import '../css/mobile.css'

class QuestionCard extends Component {
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
                    </Card.Body>
                    <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
                <WhiteSpace size="lg" />
            </WingBlank>
        );
    }
}

export default QuestionCard;
