import React from "react";

// const Textanimation3 = () => {
//   return (
//     <div className="relative cursor-pointer overflow-hidden text-[1.5vw] text-[black] font-black group bg-slate-100 ">
//       <h2 className="inline-block p-1 transition-transform duration-500 ease-out  font-black group-hover:[translateY(-120%)] group-hover:[transform:rotateX(45deg)]">
//         <button>click here</button>
//       </h2>
//       <h2 className="absolute left-0 inline-block translate-y-[73%] p-1 transition-transform duration-500 ease-out font-black group-hover:[transform:translateY(0%)]">
//         <button>click here</button>
//       </h2>
//     </div>
//   );
// };

// export default Textanimation3;

const Textanimation3 = () => {
  return (
    <div className="relative cursor-pointer overflow-hidden text-[1.5vw] text-[black] font-black group bg-slate-100 ">
      <h2 className="  inline-block p-1 transition-transform duration-500 ease-out font-black group-hover:translate-y-[-120%] group-hover:[transform:rotateX(45deg)]">
        <button>click here</button>
      </h2>
      <h2 className="absolute left-0 inline-block translate-y-[73%] p-1 transition-transform duration-500 ease-out font-black group-hover:translate-y-0">
        <button>click here</button>
      </h2>
    </div>
  );
};

export default Textanimation3;
