const express = require("express");
const router = express.Router();
const Todo = require("../../models/Todo");

// POST /
router.post("/", async (req, res) => {
  try {
    const { title, text } = req.body;
    const newTodo = await Todo.create({ title, text });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// GET /
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// GET /:id
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// note: this should probably be modified to create a new todo if one with the specified ID does not exist
// PUT /:id
router.put("/:id", async (req, res) => {
  try {
    const { title, text } = req.body;
    const updateTodo = await Todo.findByPk(req.params.id);
    await updateTodo.update({ title, text });
    res.status(200).json({ msg: "Todo updated" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// DELETE /:id
router.delete("/:id", async (req, res) => {
  try {
    await Todo.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
