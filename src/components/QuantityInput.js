import React, { useState } from 'react';

const QuantityInput = (props) => {
    
    const [count, setCount] = useState(props.count);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const getQuantityMessage = (count) => {
        if(count > 7) {
            return (
                <div className="alert alert-success">
                    All good!
                </div>
            );
        }

        if(count < 3) {
            return (
                <div className="alert alert-danger">
                    Oh no!
                </div>
            );
        }

        return null;
    }
    
    return (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-danger" type="button" onClick={decrement}><i className="fa fa-minus-circle"></i></button>
                </div>

                <input readOnly type="text" className="form-control text-center" value={count} />

                <div className="input-group-append">
                    <button className="btn btn-outline-success" type="button" onClick={increment}><i className="fa fa-plus-circle"></i></button>
                </div>
            </div>

            {getQuantityMessage(count)}
        </div>
    );

}

export default QuantityInput;