import React from 'react'; 
import { useContext } from 'react';
import { DataContext } from './DataContext';

// function ComponentA() {
//   const data = useContext(DataContext);

//   return (
//     <div>
//       <h2>This is Component A</h2>
//       <p>
//         <span>{data.userInfo.name}'s favorite color is </span>
//         <span style={{ color: data.userInfo.favColor }}>
//           {data.userInfo.favColor}</span>
       
//       </p>
//     </div>
//   );
// }

// DESTRUCTURE


function ComponentA() {
  const { userInfo, setUserInfo } = useContext(DataContext);
  return (
    <div>
      <h2>This is Component A</h2>
      <p>
        <p>{userInfo.name}'s favorite color is </p>
        <p style={{ color: userInfo.favColor }}>{userInfo.favColor}</p>
      </p>
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "green"
          })
        }
       
      >
        Change to Green
      </button>
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "red"
          })
        }
       
      >
        Change to red
      </button>
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "blue"
          })
        }
       
      >
        Change to Blue
      </button>
    </div>
  );
 }

export default ComponentA