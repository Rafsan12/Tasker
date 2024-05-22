import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import Search from "./Search";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TashBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to learn React so that I can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "JS"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddModal(false);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };
  return (
    <>
      {/* <!-- Begin Table --> */}
      <section className="mb-20" id="tasks">
        {showAddModal && (
          <AddTaskModal onSave={handleAddTask} taskToUpdate={taskToUpdate} />
        )}
        <div className="container">
          <Search />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction onAddClik={() => setShowAddModal(true)} />
            <div className="overflow-auto">
              <TaskList tasks={tasks} onEdit={handleEditTask} />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Table --> */}
    </>
  );
}
