import React from 'react'
import { ImSpinner2 } from 'react-icons/im'

const Info = props => {

  const dateWeather = (e) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];

    let day = days[e.getDay()];
    let date = e.getDate();
    let month = months[e.getMonth()];
    let year = e.getFullYear();

    return `${day} ${date} ${month} ${year}`
  };

  return (
    // info weather
    <div className="col-span-2 justify-center items-center flex h-auto md:h-[64%] lq:h-[66%] lg:h-[68%] xl:h-[74%] 2xl:h-[75%] border-2 border-cyan-400 shadow-lg shadow-cyan-500/50 rounded-xl bg-black/50  xs:w-[70%] sm:w-[80%]  md:w-[90%] lq:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[90%] xs:py-1 md:mt-[4%] lq:mt-[4%] lg:mt-[5%] xl:mt-[5%] 2xl:mt-[5%] -left-[2%] relative mx-auto">

      {
        props.temperature ?
          <div className="flex flex-col md:flex-row lq:flex-row lg:flex-row xl:flex-row 2xl:flex-row mx-4 md:mx-[2rem]  lq:mx-[2.5rem] lg:mx-[3.5rem] gap-4 my-4 md:my-auto lq:my-auto lq:h-[80%] xl:gap-20 2xl:gap-20 xl:h-[80%] 2xl:h-[80%] xl:w-[80%] 2xl:w-[80%]" >
            {/* info city and week */}
            <div className=" rounded-xl flex flex-col gap-2 justify-center text-center md:mx-2 bg-cyan-900/75 divide-y divide-cyan-100/50 lq:px-4 lg:px-4 xl:w-[80%]">
              <h2 className="text-3xl mt-3 xl:text-4xl text-white text-center lq:mb-[20%] lg:mb-[20%] xl:mb-[20%]">{props.city}, {props.country}</h2>
              <span className="rounded-md flex items-center text-center p-2 ">
                <p className='text-2xl text-white lq:mt-[10%] xl:mt-[20%]'>{dateWeather(new Date())}</p>
              </span>
            </div>
            <div className="w-[100%] h-auto bg-cyan-900/75 text-center rounded-xl hover:bg-cyan-800 relative p-2 lq:px-4">
              <h2 className="text-3xl text-white ring-2 ring-white rounded-md bg-cyan-200/50 h-auto w-[90%] top-[3%] mx-auto lq:mt-[10%] xl:mt-[10%] relative">
                {props.description}
              </h2>
              <div className="mt-auto">
                <span className='text-[250%] text-white animate-pulse'><p className='mt-[10%]'>{Math.round(props.temperature)}°C</p></span>
                <div className='mt-auto flex flex-row gap-8 items-center justify-center'>
                  <span className="text-[150%] text-white"><p className='text-sm mt-[11%]'> Max</p>{Math.round(props.temp_max)}°C</span>
                  <span className="text-[100%] text-white"><p className='text-sm mb-[12%]'> Min</p>{Math.round(props.temp_min)}°C</span>
                </div>
              </div>
              <div className="flex flex-col mx-auto items-center">
                <span className="flex flex-row gap-2">
                  <img src="viento.png" alt=""/>
                  <p className='text-xl text-white'>{props.wind_speed} Km/h</p>
                </span>
                <span className="flex flex-row gap-2">
                  <img src="lloviendo1.png" alt="" />
                  <p className='text-xl text-white'> {props.humidity} %</p>
                </span>
              </div>
            </div>
          </div>
          :
          <div className='flex flex-col gap-6 items-center my-4 mx-[10%] '>
            <div className='text-4xl lg:text-6xl xl:text-8xl text-white flex gap-2 mx-4'>
              <span >
                <div className='flex xs:items-center  '>
                No date... 
                  <ImSpinner2 className='text-cyan-200 animate-spin' />
                </div>
                {/*Mensaje de error*/}
                {props.error ?
                  <div className="text-3xl font-bold text-cyan-300 animate-pulse ">
                    <p>{props.error}</p>
                  </div> :
                <p className='text-xl animate-pulse text-cyan-200 px-[5%]'>search for a city and country</p>}
              </span>
            </div>
          </div>
      }
    </div>
  );
}


export default Info;
