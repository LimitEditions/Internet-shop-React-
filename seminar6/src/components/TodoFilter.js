import React, { useContext } from 'react';
import {FilterContext} from '../contexts/FilterContext';

const TodoFilter = () => {
    const { filter, setFilter} = useContext(FilterContext);

    return(
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value='all'>Все</option>
            <option value='complited'>Выполненные</option>
            <option value='active'>Активные</option>
        </select>
    );
};

export default TodoFilter;