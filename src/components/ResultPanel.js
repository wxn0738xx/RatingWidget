import React from 'react';
import {Result} from 'antd';

const ResultPanel = (props) => {
    let message = "Thanks! You rated this " + props.ratingScore + " stars."
    return (
        <Result
            status="success"
            title={message}
        />
    );
};

export default ResultPanel;