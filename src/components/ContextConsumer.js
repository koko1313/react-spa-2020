import React from 'react';
import AppContext from '../context/ApplicationContext';

class ConsumerContext extends React.Component {
    render = () => {
        return <AppContext.ApplicationContextProvider>
            {context => (
                <>
                    <div>{context.title}</div>
                    <button className="btn btn-success" onClick={() => context.setTitle("New title")}>Change</button>
                </>
            )}
        </AppContext.ApplicationContextProvider>
    }
}

export default ConsumerContext;