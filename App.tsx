// import { BrowserRouter } from "react-router-dom";
// import { useEffect, useState } from "react";
// import loader from "./assets/company/loader.gif"
// import {
//   About,
//   Contact,
//   Experience,
//   Hero,
//   Navbar,
//   Tech,
//   Works,
//   StarsCanvas,
// } from "./components";
// import { config } from "./constants/config";

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (document.title !== config.html.title) {
//       document.title = config.html.title;
//     }

//     // Set a 5 seconds delay before hiding the loader
//     setTimeout(() => {
//       setLoading(false);
//     }, 4000);
//   }, []);

//   return (
//     <BrowserRouter>
//       {loading ? (
//         <div className="loader-container">
//           <div className="loader">
//             <img src={loader} alt="" /> 
//          </div> 
//          <div className="logo-head">
//              <h2 >Sufiyan Farooq</h2>
//             </div>
//         </div>
//       ) : (
//         <div className="bg-primary relative z-0">
//           <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
//             <Navbar />
//             <Hero />
//           </div>
//           <About />
//           <Experience />
//           <Tech />
//           <Works />
//           {/* <Feedbacks /> */}
//           <div className="relative z-0">
//             <Contact />
//             <StarsCanvas />
//           </div>
//         </div>
//       )}
//     </BrowserRouter>
//   );
// };

// export default App;



export default function App(){
  return (
    <>
    <h1>Hello World !</h1>
    </>
  )
}