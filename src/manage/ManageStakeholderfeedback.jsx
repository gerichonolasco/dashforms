import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function ManageStakeholderfeedback() {
  return (
    <div className="flex flex-col h-screen">
      <Header  />
      <div className="flex flex-1 overflow-hidden">
      <div className="z-10">
        <Sidebar />
        </div>
        <main className="flex-1 overflow-auto pt-16 relative">
          {/* Button placed outside the gray container */}
          <button className="absolute top-0 left-60 m-4 bg-black text-yellow-500 px-4 py-2 rounded">Add Question</button>
          {/* Gray container occupying the remaining space */}
          <div className="whiteSpace absolute mx-4 w-4/5 left-60 ">
            {/* Gray container */}
            <div className="flex flex-1 justify-center items-center bg-gray-200 h-96">
              {/* Content inside the gray container (if any) */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ManageStakeholderfeedback;