import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import { Todo } from "../models/todo.model.js";

const getAllTodos = asyncHandler(async (req, res) => {
  const username = req.user.username;
  const todos = await Todo.find({ author: username });

  return res
    .status(200)
    .json(new apiResponse(200, todos, "Todos fetched successfully"));
});
const addNewTodo = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    tags,
    list,
    status,
    subtodo,
    projectTodo,
    subAuthors,
  } = req.body;
  const author = req.user.username;
  if (!title || !list || !description) {
    throw new apiError(400, "Insufficient Data");
  }
  const todo = await Todo.create({
    author,
    title,
    description,
    tags,
    list,
    status,
    subtodo,
    projectTodo,
    subAuthors,
  });

  const createdTodo = await Todo.findById(todo._id).select("-author");
  if (!createdTodo) {
    throw new apiError(500, "Something went wrong while creating todo");
  }
  return res
    .status(200)
    .json(new apiResponse(200, createdTodo, "Successfully created todo"));
});
const updateTodo = asyncHandler(async (req, res) => {
  const { _id, title, description, tags, list, status, subtodo, subAuthors } =
    req.body;
  if (!_id) {
    throw new apiError(400, "Insufficient Data");
  }
  const updatedTodo = await Todo.findByIdAndUpdate(
    _id,
    {
      $set: {
        title,
        description,
        tags,
        list,
        status,
        subtodo,
        subAuthors,
      },
    },
    {
      new: true,
    }
  ).select("-author");

  return res
    .status(200)
    .json(new apiResponse(200, updatedTodo, "Todo updated successfully"));
});
export { getAllTodos, addNewTodo, updateTodo };
