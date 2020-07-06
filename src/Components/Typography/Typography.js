import React from 'react';
import Aux from '../../Hoc/Aux/Aux';
const Typography = (props) => {
    return (
        <Aux className="Typography">
            {props.children}
        </Aux>
    );
};
export default Typography;