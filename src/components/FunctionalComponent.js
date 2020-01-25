import React, {useState, useEffect} from 'react';

// силно препоръчително е да използваме Functional components, а не Class components
const FunctionalComponent = (props) => {

    // целта е компонента да разчита само на това, което получава от props, да няма вътре декларирани нови променливи и т.н.
    // class компонентите се използват само когато искаме да наследяваме някакви базови компоненти
    // https://reactjs.org/docs/typechecking-with-proptypes.html - деклариране на тип на параметър и дали е задължително, другия вариант е да използваме typescript (това е по-добрия вариант)

    // деклариране на state във functional component, това се нарича hooks
    // count - променлива, с начална стойност props.count
    // setCount - функцията, която ще го модифицира
    const [count, setCount] = useState(props.count);

    useEffect(() => {
        // извиква се само веднъж, когато се зареди компонента
        console.log("mounted");

        // извиква се само веднъж, когато се unmount-не компонента
        return () => {
            console.log("unmount");
        }
    }, []);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => {setCount(count + props.step)}} className="btn btn-primary">Increment</button>
            <button onClick={() => {setCount(count - props.step)}} className="btn btn-primary">Decrement</button>
        </div>
    );

}

export default FunctionalComponent;