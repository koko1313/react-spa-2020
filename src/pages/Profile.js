import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import setActionCount from '../redux/actions/counter';
import setActionTitle from '../redux/actions/title';

// функционален компонент
const Profile = (props) => {

    // използване на useSelector, вместо connect
    // това е еквивалента на mapStateToProps
    const counter = useSelector(state => state.counter);

    // dispatch във functional component
    const dispatch = useDispatch();

    const setCounter = () => dispatch(setActionCount(20));

    const setTitle = (title) => dispatch(setActionTitle(title));

    return  <div>
        <h1>Profile Page</h1>
        <p>Global count: {counter}</p>
        <button className="btn btn-warning" onClick={() => setCounter(20)}>Set glabal counter</button>
        <button className="btn btn-warning" onClick={() => setTitle("New title")}>Set global title</button>
    </div>
}

// направо си подаваме функцията вътре (анонимна функция), вместо да я пишем отвън
export default Profile;