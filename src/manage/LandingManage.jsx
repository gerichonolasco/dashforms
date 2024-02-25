import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function LandingManage() {
    return (
      <div style={{ backgroundImage: "url('/images/mainbldg.png')", height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Header />
        <div className="flex flex-col h-screen">
          <div className="flex flex-1 overflow-hidden">
            <div className="z-10 flex-1">
              <Sidebar />
            </div>
            {/* Containers */}
            <div className="flex flex-col p-2 pl-4"> {/* Adjusted alignment to the left */}
              <div className="flex items-center justify-start mb-3">
                <h1 className="text-4xl font-bold text-gray-800">Forms</h1>
              </div>
              <div className="w-full h-1 bg-yellow-400 mb-3"></div>
              <div className="flex justify-between">
                <div className="relative w-96 h-96 mx-1 bg-gray-200 flex flex-col items-center justify-center">
                  <span className="text-center font-bold">Stakeholder's Feedback</span>
                  <br />
                  <span className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  <br />
                  <br />
                  <a href="#" className="mt-auto text-blue-500">View feedbacks</a>
                </div>
                <div className="relative w-96 h-96 mx-1 bg-gray-200 flex flex-col items-center justify-center">
                  <span className="text-center font-bold">Internal Auditor's Evaluation</span>
                  <br />
                  <span className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  <br />
                  <br />
                  <a href="#" className="mt-auto text-blue-500">View evaluation</a>
                </div>
                <div className="relative w-96 h-96 mx-1 bg-gray-200 flex flex-col items-center justify-center">
                  <span className="text-center font-bold">Quality Management System Evaluation</span>
                  <br />
                  <span className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  <br />
                  <br />
                  <a href="#" className="mt-auto text-blue-500">View evaluation</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LandingManage;
