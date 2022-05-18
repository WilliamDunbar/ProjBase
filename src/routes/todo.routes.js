const express = require("express");
const { getAllTodos } = require("../services/todo.service");

const TodoController = {};
TodoController.getAllTodos = (req, res) => {
  try {
    const todos = todoService.getAllTodos();
    res.status(200).json({
      todos: todos,
    });
  } catch (error) {
    res.status(400);
  }
};

module.exports = TodoController;
