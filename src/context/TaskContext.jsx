import { createContext, useState, useEffect } from 'react'
import { tasks as taskList } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(taskList)
  }, [])

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(),
        title: task.title,
        description: task.description,
      },
    ])
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}
