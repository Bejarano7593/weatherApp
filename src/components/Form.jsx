import React, {useState} from "react";

const Form = props => {

  const [btn, setBtn] = useState(true);
  return (
    <div className="rounded-xl flex flex-col justify-center items-center md:h-[70%] lg:h-[70%] border-2 border-cyan-400 shadow-lg shadow-cyan-500/50 w-[80%]  py-[10%] mt-[10%] mx-auto bg-black/50">
      {/* Contenido de Form */}
      <h2 className="text-3xl col-span-2 text-center mb-[20%] font-bold border-b-2 text-white">
        Weather
      </h2>
      <form onSubmit={props.getWeather} className="flex flex-col gap-8 py-4 w-[80%]">
        <input
          type="text"
          name="city"
          placeholder="Insert your city..."
          className="px-2 rounded-md h-[2rem] bg-red-100 outline-none text-gray-800 font-semibold"
        />
        <input
          type="text"
          name="country"
          placeholder="Insert your country..."
          className="px-2 rounded-md h-[2rem] bg-red-100 outline-none text-gray-800 font-semibold"
        />
        <button
          onClick={()=>setBtn(!btn)}
          type="submit"
          name="btn"
          className="rounded-xl h-[40px] mt-8 bg-cyan-200/75 shadow-lg shadow-cyan-300/50 text-gray-800 font-semibold
        "
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
