import React from "react";
import { TiWeatherSnow } from "react-icons/ti";
import { BsSearch } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';
import { useState } from "react";
import Form from './Form';

const Navbar = props => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between md:justify-center p-2 bg-slate-400 ">
      <div className="text-center flex items-center justify-center gap-4  mx-auto">
        <span className="text-4xl text-red-200 bg-gray-700 rounded-lg">
          <TiWeatherSnow />
        </span>
        <h1 className="text-4xl font-bold text-gray-700">Weather</h1>
      </div>
      <nav className={`fixed w-[100%] bg-[url('/luna3.jpg')] bg-cover h-[100%] top-0 ${showMenu ? "left-0" : "-left-full"
        }  flex flex-col items-center justify-center transition-all duration-500 z-50`}>
          <button onClick={() => setShowMenu(!showMenu)} className=" text-xl text-red-200 left-[87%] sm:left-[90%] mq:left-[92%]  top-[2.5%] absolute">
            {showMenu ? <IoCloseSharp/> : <div></div> }
          </button>
        {showMenu ?
         <div onSubmit={props.getWeather} className="w-full sm:w-[70%] mq:w-[70%] flex items-center flex-col">
            <Form />
            {props.temperature ? 
              <div>{/* Falta ocultar el search cuandoconsulte */ }</div> 
              :
              (props.error && 
                <div className="text-2xl font-bold text-cyan-300 animate-pulse border-2 border-cyan-400 my-4 mx-[10%] p-2 rounded-xl">
                  <p>{props.error}</p>
                </div> )}
          </div> 
            : 
            null
        }
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} 
        className="md:hidden lg:hidden lq:hidden xl:hidden 2xl:hidden text-xl text-red-200 mr-[4%] xl:left-[20%]">
        {showMenu ? <IoCloseSharp className="text-transparent"/> : <BsSearch />}
      </button>

    </header>
  );
}

export default Navbar;
