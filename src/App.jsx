import { useState } from 'react'
import './App.css'

function App() {
  const[input, setInput] = useState("");
  const[tasks, setTasks] = useState([]);
  const[idx, setIdx] = useState(1);
  const[isCompleted, setIsCompleted] = useState(false);
  const[pending, setPending] = useState(true);
  const[edit, setEdit] = useState(false);
  const[editTask, setEditTask] = useState("");
  const[editId, setEditId] = useState(null);
  // const[del, setDel] = useState(false);
  // const[delId, setDelId] = useState(null);
  
  const addTasksIntoArr = () => {
    const taskObj = {
      id : idx,
      task : input,
      isCompleted : isCompleted
    }
    setTasks(prevTask => [...prevTask, taskObj]);
    setIdx(idx+1);
    alert("TODO Added Successfully✔");
    setInput("");
  }

  const saveTask = () => {
    setTasks(prevTask => 
      prevTask.map(task => editId == task.id ? {...task, task : editTask} : task)
    );
    setEditId(null);
    setEdit(false);
    alert("Task Edited Successfully✔");
  }

  const deleteTask = (delId) => {
    setTasks(prev => prev.filter(task => delId !== task.id));
    alert("Task Deleted Successfully✔");
  }

  return (
    <>
      <div className="main min-h-screen w-full bg-linear-to-br from-green-200 to-green-400 flex items-center justify-center" >
        <div className="contain shadow-2xl  rounded-2xl  h-full min-h-18 bg-green-100  w-148 flex item-evenly justify-center flex-col">
          <div className={`addTask flex items-center justify-center gap-4 p-4 h-18 ${tasks.length === 0 ? "" : "border-b"}`}>
            <textarea className='bg-white rounded-lg border w-full h-10 p-3 flr focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center justify-center placeholder:text-center text-left placeholder:text-gray-400 resize-none overflow-hidden' name="" id="inputarea" placeholder='Enter the task' value={input} onChange={(e) => setInput(e.target.value)}></textarea>
            <input className='border px-4 py-2 text-white font-semibold rounded-lg w-18 bg-green-600 cursor-pointer hover:bg-green-700' type="button" value='ADD' onClick={addTasksIntoArr}/>
          </div>
          <div className="state mb-2 h-10 flex items-center justify-around w-148">
            <button className={`flex-1 py-2 font-semibold ${pending ? "bg-green-700 text-white" : "bg-green-200"}`} onClick={() => setPending(true)}>Pending</button>
            <button className={`flex-1 py-2 font-semibold ${!pending ? "bg-green-700 text-white" : "bg-green-200"}`} onClick={() => setPending(false)}>Completed</button>
          </div>
          <div className={`tasks flex flex-col gap-3 items-center ${tasks.length !== 0 ? "p-4" : ""} wrap-break-word`}>
            {
              (() => {
                const filtered = pending ? tasks.filter((i) => !i.isCompleted) : tasks.filter((i) => i.isCompleted);
                if(filtered.length === 0)  {
                  return (
                    <div className="notask bg-white mb-2 text-gray-600 min-h-12  px-4 py-2 w-120 rounded shadow flex items-center justify-center">
                      <h2>No Task Available</h2>
                    </div>
                  )
                }
                return filtered.map((i) => {
                return(
                  <div className="task min-h-12 border  w-full bg-white rounded-xl shadow-md p-3 hover:shadow-lg transition flex justify-between items-center" key={i.id}>
                    <div className="ts w-3xl">
                      {
                        edit && editId == i.id ? <> <textarea className='bg-white rounded-lg border w-full h-10 p-3 flr focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center justify-center placeholder:text-center placeholder:text-gray-400 mb-2 resize-none overflow-hidden' name="" id="inputarea1" placeholder='Enter the task' value={editTask} onChange={(e) => setEditTask(e.target.value)}></textarea>
                        <input className='border px-4 py-2 text-white font-semibold rounded-lg w-18 bg-green-600  cursor-pointer hover:bg-green-700' type="button" value='SAVE' onClick={saveTask}/>
                         </>
                        : 
                          <h2 className='font-semibold text-gray-800 wrap-break-word'>{i.task}</h2>
                      }
                    </div>
                      {!i.isCompleted ? 
                  (
                          <div className={`btns flex flex-col w-48 gap-2 ${edit ? "hidden" : ""}`}>
                            <button className={`border rounded  bg-blue-500 font-bold cursor-pointer hover:bg-blue-600 transition px-3 py-1 text-white`} onClick={() => {
                              setEdit(true); 
                              setEditId(i.id);
                              setEditTask(i.task);
                            }
                            }>Edit</button>
                            <button className={`border rounded  bg-red-500 font-bold cursor-pointer hover:bg-red-600 transition px-3 py-1 text-white`} onClick={() => {
                              deleteTask(i.id);
                              }}>Delete</button>
                            <div className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" id="complete" checked = {i.isCompleted} onChange={
                                () => {
                                  setTasks(prev => prev.map(task => task.id === i.id ? {...task, isCompleted : !task.isCompleted} : task));
                                  alert(`Task Completed ✔`);
                                }
                              } />
                              <label  htmlFor="complete">Completed</label>
                            </div>
                          </div>
                        ):''}
                      
                  </div>
                )
              })
              })()
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
