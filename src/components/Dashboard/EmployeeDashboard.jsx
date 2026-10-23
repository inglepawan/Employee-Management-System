import React from 'react'
import Header from '../others/Header'
import TaskNumbers from '../others/TaskNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header />
      <TaskNumbers />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
