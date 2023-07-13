import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { types, onSnapshot, applySnapshot } from "mobx-state-tree";
import "../styles/tailwind.css";

// Defining the Task type
type Task = {
  title: string;
  description: string;
  status: string;
};

// Defining the Task model
const TaskModel = types.model("Task", {
  title: types.string,
  description: types.string,
  status: types.string,
});

// Defining the TaskStore model
const TaskStore = types
  .model("TaskStore", {
    tasks: types.array(TaskModel),
  })
  .actions((self) => ({
    // Action for adding a new task
    addTask(task: Task) {
      self.tasks.push(task);
    },
    // Action for editing an existing task
    editTask(index: number, updatedTask: Task) {
      self.tasks[index] = updatedTask;
    },

    // Action for deleting a task
    deleteTask(index: number) {
      self.tasks.splice(index, 1);
    },

    // Action for clearing all tasks
    clearTasks() {
      self.tasks.clear();
    },
  }));

// Creating an instance of TaskStore
const taskStore = TaskStore.create({ tasks: [] });

// Main component
function Home() {
  const [newTask, setNewTask] = useState<Task>({
    title: "",
    description: "",
    status: "",
  });

  useEffect(() => {
    // Loading tasks from local storage on component mount
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      applySnapshot(taskStore.tasks, JSON.parse(storedTasks));
    }

    // Applying the stored snapshot to the taskStore
    onSnapshot(taskStore.tasks, (snapshot) => {
      localStorage.setItem("tasks", JSON.stringify(snapshot));
    });
  }, []);

  const addTask = () => {
    if (
      newTask.title.trim() !== "" &&
      newTask.description.trim() !== "" &&
      newTask.status.trim() !== ""
    ) {
      // Adding the new task to the taskStore
      taskStore.addTask(newTask);
      setNewTask({ title: "", description: "", status: "" });
    }
  };

  const editTask = (index: number, updatedTask: Task) => {
    // Editing the task at specified index
    taskStore.editTask(index, updatedTask);
  };

  const deleteTask = (index: number) => {
    // Deleting the task at specified index
    taskStore.deleteTask(index);
  };

  return (
    <div className="mx-auto my-auto p-4 dark:bg-slate-900 w-full h-screen ring-1 shadow-xl overflow-y-auto">
      <div className="w-full xl:max-w-3xl mx-auto">
        <h1 className="xl:text-9xl lg:text-7xl md:text-5xl sm:text-3xl font-bold mb-8 ml-6 text-blue-600">
          Task Management
        </h1>

        {/* Task List */}
        <ul className="xl:w-full my-4">
          {taskStore.tasks.map((task: Task, index: number) => (
            <li
              key={index}
              className="xl:w-full lg:w-96 dark:bg-blue-900 rounded-xl shadow p-4 ml-6 mb-2 items-center justify-between"
            >
              <div>
                <h3 className="text-4xl font-bold dark:text-slate-900">{task.title}</h3>
                <p className="text-3xl dark:text-slate-900">{task.description}</p>
                <p className="text-4xl font-bold dark:text-slate-900 mb-6">
                  Status: <span className="text-yellow-300 font-normal">{task.status}</span>
                </p>
              </div>
              <div>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded mr-2"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                  onClick={() =>
                    editTask(
                      index,
                      Object.assign({}, task, {
                        title: prompt('Enter the updated title:', task.title) || task.title,
                        description:
                          prompt('Enter the updated description:', task.description) ||
                          task.description,
                        status: prompt('Enter the updated status:', task.status) || task.status,
                      })
                    )
                  }
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Add Task Form */}
        <div className="ml-6 flex-none">
          <input
            type="text"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="mr-2 mb-2 px-4 py-2 border rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            className="mr-2 mb-2 px-4 py-2 border rounded"
          />
          <input
            type="text"
            placeholder="Status"
            value={newTask.status}
            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
            className="mr-2 mb-2 px-4 py-2 border rounded"
          />
          <button
            onClick={addTask}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default observer(Home);
