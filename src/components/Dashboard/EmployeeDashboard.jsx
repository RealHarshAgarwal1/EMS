import React from 'react';
import Header from '../Subcomponents/Header';
import TaskListNumbers from '../Subcomponents/TaskListNumbers';

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header/>
      <TaskListNumbers/>
    </div>
  );
}

export default EmployeeDashboard;
