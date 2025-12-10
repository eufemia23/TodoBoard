import Todo from "../models/todoModel.js"

//@desc get all todos
//@route GET /api/todos
//@access private
export async function getTodos(req, res) {
  try {
    const todos = await Todo.find({user_id: req.params.userid}).sort({ createdAt: -1 });
    res.status(200).json(todos)
  } catch (error) {
    console.error("Error in getTodos controller", error)
    res.status(500).json({message: "Internal server error"})
  }
};

//@desc get a todo
//@route GET /api/todos/:id
//@access private
export async function getTodo(req, res) {
  try {
    const todo = await Todo.findById(req.params.id)
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.status(200).json(todo);
  } catch (error) {
    console.error("Error in getTodo controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//@desc create a todo
//@route POST /api/todos
//@access private
export async function createTodo(req, res) {
  try {
    const { content, status, folder } = req.body;

    if (!content || !folder) {
      return res.status(400).json({ message: "content and folder are required" });
    }

    const todo = new Todo({
      content,
      status,
      folder,
      user_id: req.params.userid,
    });

    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    console.error("Error in createTodo controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//@desc update a todo
//@route PUT /api/todos/:id
//@access private
export async function updateTodo(req, res) {
  try {
    const content = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      content,
      { new: true }
    );
    if (!updatedTodo) return res.status(404).json({ message: "Todo not found" });
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error("Error in updateTodo controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//@desc delete a todo
//@route DELETE /api/todos/:id
//@access private
export async function deleteTodo(req, res) {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id)
    if (!deletedTodo) return res.status(404).json({message: "Todo not found"})
    res.status(200).json({message: "Todo deleted successfully"})
  } catch (error) {
    console.error("Error in deleteTodo controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

