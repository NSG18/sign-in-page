
function App() {

  return (
    <>

      <div className="main  w-full sm:py-4 py-2  bg-gradient-to-br from-[#75acdf] via-[#868dcf] to-[#8b69a9] h-min-screen  ">
        <div className="register bg-white sm:my-[60px] my-[2px] h-min-[80vh] sm:w-[50%] w-[90vw]  sm:mx-auto mx-4 rounded-2xl p-5 " >
          <h1 className="font-bold text-[22px]">Regristration</h1>
          <div className="smalline h-1 sm:w-[30px] w-full bg-gradient-to-br from-[#75acdf] via-[#8d72b0] to-[#8b69a9]"></div>
          <div className="inputs w-full flex gap-1 my-5">
            <div className="input1 sm:w-1/2 flex flex-col gap-6 w-full">
              <div >
                <h2 className="font-semibold">Full Name</h2>
                <input type="text" placeholder="Enter Your Name" className="sm:w-[80%] py-2 px-1 border-2 border-gray-300 rounded-lg w-full " />
              </div>
              <div>
                <h2 className="font-semibold">Email</h2>
                <input type="text" placeholder="Enter Your Email" className="sm: py-2 px-1 border-2 border-gray-300 rounded-lg w-full" />
              </div>
              <div>
                <h2 className="font-semibold">Password</h2>
                <input type="text" placeholder="Enter Your Password" className="sm:w-[80%] py-2 px-1 border-2 border-gray-300 rounded-lg w-full" />
              </div>
              <div className="sm:hidden block">
                <h2 className="font-semibold">Conform Password</h2>
                <input type="text" placeholder="Conform Password" className="sm:w-[80%] py-2 px-1 border-2 border-gray-300 rounded-lg  w-full" />
              </div>
            </div>
            <div className="input2 w-1/2 sm:flex flex-col gap-6 hidden ">
            <div>
                <h2 className="font-semibold">User Name</h2>
                <input type="text" placeholder="Enter Your Name" className="w-[80%] py-2 px-1 border-2 border-gray-300 rounded-lg " />
              </div>
              <div>
                <h2 className="font-semibold">Phone Number</h2>
                <input type="text" placeholder="Enter Your Number" className="w-[80%] py-2 px-1 border-2 border-gray-300 rounded-lg  " />
              </div>
              <div>
                <h2 className="font-semibold">Conform Password</h2>
                <input type="text" placeholder="Conform Password" className="w-[80%] py-2 px-1 border-2 border-gray-300 rounded-lg  " />
              </div>
            </div>
          </div>
          <div className="gender  w-[80%]">
            <div className="flex gap-2 items-center">
              <div className="circle h-[14px] w-[14px] border border-[#a4a8a6] rounded-full"></div>
              <div className="circle h-[14px] w-[14px] border border-[#a4a8a6] rounded-full"></div>
              <div className="circle h-[14px] w-[14px] border border-[#a4a8a6] rounded-full"></div>
               <div className="font-bold">Gender</div>
            </div>
            <div className="flex sm:gap-[50px] gap-2 my-4 justify-between sm:px-5">
              <div className="flex items-center gap-2 ">
                <input type="checkbox" name="" id="" className="bg-[#a4a8a6] h-[14px] w-[14px] rounded-full appearance-none checked:bg-blue-500  cursor-pointer " />
                <span>Male</span>
              </div>
              <div className="flex items-center gap-2 ">
                <input type="checkbox" name="" id="" className="bg-[#a4a8a6] h-[14px] w-[14px] rounded-full appearance-none checked:bg-blue-500 cursor-pointer " />
                <span>Female</span>
              </div>
              <div className="flex items-center gap-2 ">
                <input type="checkbox" name="" id="" className="bg-[#a4a8a6] h-[14px] w-[14px] rounded-full appearance-none checked:bg-blue-500 cursor-pointer " />
                <span>Other</span>
              </div>
            </div>
          </div>
          <div className="btn my-2">
            <button className="p-1 border border-gray-600 bg-gray-300 rounded-lg hover:bg-gray-600">Registor</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
