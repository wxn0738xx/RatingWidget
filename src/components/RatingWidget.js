import React from 'react';

import {Rate} from 'antd';

const RatingWidget = (props) => {
    return (
        <div>
            <Rate allowHalf={props.allowHalf} defaultValue={props.defaultValue}
                  value={props.value} onChange={props.onChange}/>
        </div>
    );
};

export default RatingWidget;