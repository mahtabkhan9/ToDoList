'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }])
    settitle("")
    setdesc("")
    console.log(mainTask)
  };

  const deletehandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deletehandler(i)
            }}
            className='bg-red-400 text-white px-4 py-2 rounded font-bold hover:bg-red-600 transition-all'>Delete</button>
        </li>
      );
    })
  }
  return (
    <>
      <div className='flex justify-center items-center w-full bg-black'>
        <h1 className='bg-black text-white p-5 text-[2.5rem] font-bold text-center' >My ToDo List</h1>
      </div>
      <div className='flex items-center justify-center '>
        <form className='mb-6 ' onSubmit={submitHandler}>
        <div className='mx-auto'>
          <input
            type='text'
            placeholder='Enter title here'
            className='border-2 rounded border-slate-900 m-8 mb-2 px-4 py-2'
            value={title}
            onChange={(e) => {
              settitle(e.target.value)
            }}
          />
          <input
            type='text'
            placeholder='Enter description here'
            className='border-2 rounded border-slate-900 m-8 mb-2 px-4 py-2'
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value)
            }}
          />
          </div>
          <div className='flex justify-center'>
            <button className='bg-black text-white px-4 py-2 rounded font-bold hover:bg-gray-900 transition-all'>Add Task</button>
          </div>
        </form>
      </div>
      <hr />
      <div className='bg-slate-200 p-8'>
        <ul>
          {renderTask}
        </ul>

      </div>
    </>
  )
}

export default page
