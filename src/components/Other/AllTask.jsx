import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const authData = useContext(AuthContext) || {};
   const employees = authData.employees || (Array.isArray(authData) ? authData[0]?.employees : []) || [];

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium text-white w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium text-white w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium text-white w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium text-white w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium text-white w-1/5'>Failed</h5>
        </div>
        <div className='overflow-auto max-h-80'>
        {employees.map((elem, idx) => {
            const newTaskCount = elem.taskCounts?.newTask ?? elem.tasks?.filter((t) => t.newTask).length ?? 0;
            const activeCount = elem.taskCounts?.active ?? elem.tasks?.filter((t) => t.active).length ?? 0;
            const completedCount = elem.taskCounts?.completed ?? elem.tasks?.filter((t) => t.completed).length ?? 0;
            const failedCount = elem.taskCounts?.failed ?? elem.tasks?.filter((t) => t.failed).length ?? 0;

            return (
              <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium text-white w-1/5'>{elem.firstName}</h2>
                <h3 className='text-lg font-medium w-1/5 text-blue-400'>{newTaskCount}</h3>
                <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{activeCount}</h5>
                <h5 className='text-lg font-medium w-1/5 text-white'>{completedCount}</h5>
                <h5 className='text-lg font-medium w-1/5 text-red-600'>{failedCount}</h5>
              </div>
            );
        })}
        </div>
    </div>
  )
}

export default AllTask