const withFilter = (todos, filter) => {
    switch (filter) {
        case 'complited':
            return todos.filter(todo => todo.complited);
        case 'active':
            return todos.filter(todo => !todo.complited);
        default:
            return todos;
    }
};

export default withFilter;