// // src/components/AcademicCorner.js (Complete)
// import React from 'react';
// import './PageStyles.css';

// const AcademicCorner = () => {
//   return (
//     <div className="page-container">
//       <div className="page-header">
//         <h1>Academic Corner</h1>
//       </div>
//       <div className="page-content">
//         <section className="academic-info">
//           <h2>Academic Programs</h2>
//           <div className="programs-grid">
//             <div className="program-item">
//               <h3>Primary Education (1-5)</h3>
//               <p>Foundation building with focus on basic skills and values</p>
//             </div>
//             <div className="program-item">
//               <h3>Middle School (6-8)</h3>
//               <p>Comprehensive curriculum with enhanced learning methodologies</p>
//             </div>
//             <div className="program-item">
//               <h3>Secondary Education (9-10)</h3>
//               <p>Board exam preparation with focus on core subjects</p>
//             </div>
//             <div className="program-item">
//               <h3>Higher Secondary (11-12)</h3>
//               <p>Specialized streams: Science, Commerce, and Arts</p>
//             </div>
//           </div>
//         </section>

//         <section className="curriculum">
//           <h2>Curriculum Highlights</h2>
//           <div className="subjects-grid">
//             <div className="subject-category">
//               <h3>Core Subjects</h3>
//               <ul>
//                 <li>Mathematics</li>
//                 <li>Science (Physics, Chemistry, Biology)</li>
//                 <li>English Language</li>
//                 <li>Social Studies</li>
//                 <li>Regional Language</li>
//               </ul>
//             </div>
//             <div className="subject-category">
//               <h3>Co-curricular Activities</h3>
//               <ul>
//                 <li>Sports and Physical Education</li>
//                 <li>Arts and Crafts</li>
//                 <li>Music and Dance</li>
//                 <li>Drama and Theatre</li>
//                 <li>Computer Science</li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         <section className="academic-calendar">
//           <h2>Academic Calendar 2024-25</h2>
//           <div className="calendar-info">
//             <div className="term">
//               <h3>First Term</h3>
//               <p>June 2024 - September 2024</p>
//               <p>First Term Exams: October 2024</p>
//             </div>
//             <div className="term">
//               <h3>Second Term</h3>
//               <p>November 2024 - February 2025</p>
//               <p>Annual Exams: March 2025</p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AcademicCorner;

// src/components/AcademicCorner.js
import React from 'react';

const AcademicCorner = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Academic Corner</h1>
      </div>

      <div className="space-y-10">
        {/* Academic Programs */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Academic Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 border">
              <h3 className="text-xl font-medium">Primary Education (1–5)</h3>
              <p className="text-gray-600">Foundation building with focus on basic skills and values</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 border">
              <h3 className="text-xl font-medium">Middle School (6–8)</h3>
              <p className="text-gray-600">Comprehensive curriculum with enhanced learning methodologies</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 border">
              <h3 className="text-xl font-medium">Secondary Education (9–10)</h3>
              <p className="text-gray-600">Board exam preparation with focus on core subjects</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 border">
              <h3 className="text-xl font-medium">Higher Secondary (11–12)</h3>
              <p className="text-gray-600">Specialized streams: Science, Commerce, and Arts</p>
            </div>
          </div>
        </section>

        {/* Curriculum Highlights */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Curriculum Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-medium mb-2">Core Subjects</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>English Language</li>
                <li>Social Studies</li>
                <li>Regional Language</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-medium mb-2">Co-curricular Activities</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Sports and Physical Education</li>
                <li>Arts and Crafts</li>
                <li>Music and Dance</li>
                <li>Drama and Theatre</li>
                <li>Computer Science</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Academic Calendar */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Academic Calendar 2024–25</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow border">
              <h3 className="text-lg font-medium mb-1">First Term</h3>
              <p className="text-gray-600">June 2024 – September 2024</p>
              <p className="text-gray-600">First Term Exams: October 2024</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border">
              <h3 className="text-lg font-medium mb-1">Second Term</h3>
              <p className="text-gray-600">November 2024 – February 2025</p>
              <p className="text-gray-600">Annual Exams: March 2025</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AcademicCorner;
