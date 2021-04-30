import React, {Component} from 'react';
import {Button, Typography} from 'antd';
import RatingWidget from "../components/RatingWidget";
import ResultPanel from "../components/ResultPanel";

const {Title} = Typography;


class RatingWidgetPage extends Component {
    state = {
        ratingScore: 0,
        showResultPanel: false,
    }

    // handler when rating change
    ratingHandler = name => value => {
        this.setState({[name]: value})
        // if rating change, show resultPanel
        if (name === "ratingScore" && value !== 0) {
            this.setState({showResultPanel: true})
        }
    }

    clearRatingHandler = () => {
        this.setState({
            ratingScore: 0,
            showResultPanel: false,
        })
    }


    render() {
        let resultPanel = null;
        if (this.state.showResultPanel) {
            resultPanel = (
                <div>
                    <ResultPanel ratingScore={this.state.ratingScore}/>
                    <Button type="primary" onClick={this.clearRatingHandler}>Save Rating</Button>
                </div>
            )
        }

        return (
            <div style={{textAlign: "center"}}>
                <Title level={2}>Rating Widget</Title>
                <RatingWidget allowHalf={true} defaultValue={0}
                              value={this.state.ratingScore} onChange={this.ratingHandler("ratingScore")}/>
                {resultPanel}
            </div>
        );
    }
}

export default RatingWidgetPage;
