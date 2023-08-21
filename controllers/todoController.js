

const getTodos = (req,res)=>{
    res.send ("All Todos Here..");
}

const createTodo = (req, res) => {
    res.send ("TODO CREATED");
};

const updateTodo = (req, res)=>{
    res.send ("Todo Updated")
};

const deleteTodo = (req, res)=>{
    res.send ("Todo Deleted")
}

module.exports = {getTodos, createTodo , updateTodo, deleteTodo}
