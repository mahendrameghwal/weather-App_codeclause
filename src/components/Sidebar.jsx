import { useState } from "react";


const Sidebar = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    const [showProfile, SetshowProfile] = useState(false);


    const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };




  return (
    <div>
<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
<div className="px-3 py-3 lg:px-5 lg:pl-3">
  <div className="flex items-center justify-between">
    <div className="flex items-center justify-start">
      <button  onClick={toggleSidebar} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          
          <img className="border-2 h-5 border-white" src={`https://cdn-icons-png.flaticon.com/512/4202/4202762.png`} alt="" />
       </button>
      <p className="flex gap-x-2 items-center ml-2 md:mr-24">
      <svg id="logo-35" className="h-6" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#312ECB"></path> </svg>
        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Weather</span>
      </p>
    </div>
    <div className="flex items-center">
        <div className="flex items-center ml-3">
          <div>
            <button onClick={()=>{SetshowProfile(!showProfile)}} type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
            </button>
          </div>
      {
         showProfile && 
         <div className="z-50 top-9 absolute right-2 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
         <div className="px-4 py-3" role="none">
           <p className="text-sm text-gray-900 dark:text-white" role="none">
             Neil Sims
           </p>
           <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
             neil.sims@flowbite.com
           </p>
         </div>
         <ul className="py-1" role="none">
           <li>
             <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</p>
           </li>
           <li>
             <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Settings</p>
           </li>
           <li>
             <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</p>
           </li>
           <li>
             <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</p>
           </li>
         </ul>
       </div>
      }
        </div>
      </div>
  </div>
</div>
</nav>

<aside  onClick={toggleSidebar}  className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
    showSidebar ? 'translate-x-0' : '-translate-x-full'
  } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
  aria-label="Sidebar">
 <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
    <ul className="space-y-2 font-medium">
       <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
             </svg>
             <span className="ml-3">Dashboard</span>
          </a>
       </li>
     
       <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
             </svg>
             <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
             <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
          </a>
       </li>
     
       <li>
          <button  className=" w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                <path stroke="currentColor"   d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
             </svg>
             <span className="px-1 whitespace-nowrap">Log Out</span>
          </button>
       </li>
      
    </ul>
 </div>
</aside>



    
    
    
    
    
    
    </div>
  )
}

export default Sidebar