import Todo from "../models/Todo.js";

export const addTodo = async (req, res) => {
    const data = { title: req.body.title, description: req.body.description };
    try {
        const entry = new Todo(data);
        await entry.save();
        res.status(200).json(data);
        console.log("Added successfully:", data);
    } catch (err) {
        console.log("Add failed:", err);
        res.status(400).json({ message: "Add failed" });
    }
};

export const getTodos = async (req, res) => {
    try {
        const data = await Todo.find({});
        console.log("Get success:", data);
        res.status(200).json(data);
    } catch (err) {
        console.log("Get failure:", err);
        res.status(400).json(err);
    }
};

export const updateTodo = async (req, res) => {
    try {
        const entry = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log("Updated:", entry);
        res.status(200).json(entry);
    } catch (err) {
        console.log("Update failure:", err);
        res.status(400).json(err);
    }
};

export const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: `Deleted ${req.params.id} successfully` });
    } catch (err) {
        console.log("Delete failure:", err);
        res.status(400).json(err);
    }
};
