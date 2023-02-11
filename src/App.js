import React, { useEffect, useState } from "react";
import Filter from "./Filter";



const App = () => {
  const [query, setQuery] = useState([
    { field: null, condition: null, criteria: null }
  ]);

  const [conjunction, setConjunction] = useState("&&")

  const handleDelete = (id) => {
    const dummy = [...query];
    dummy.splice(id, 1);
    console.log(dummy);
    setQuery(dummy);
  };

  const handleChange = (key, type, val) => {
    const dummy = [...query];
    dummy[key][type] = val;

    setQuery(dummy);
    console.log(dummy);
  };

  const display = query.map((data, index) => {
    return (
      <Filter
        key={index}
        val={data}
        ind={index}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
    );
  });

  let res =null;
    const arr = [...query]
    arr.forEach( (data, index) => {
      if(index>0){
        res += conjunction + "\"(field." + `${data.field}` + ")"  + `${data.condition}` + "\\\"" + `${data.criteria}` + "\"\\\""
      }
      else{
        res = "\"(field." + `${data.field}` + ")"  + `${data.condition}` + "\\\"" + `${data.criteria}` + "\"\\\"" 
      }
    } )
    

    const submitHandler = () => {
      //For API access we have query in json form and res in string form
      console.log(res, { Rule : query, conjunction: conjunction });

    }

  return (
    <div className="bg-slate-900 h-screen flex flex-col items-center " >
      <div className="text-white m-4 rounded w-auto p-4 bg-blue-600 text-center" >
      <span className="font-semibold text-lg" > Build your Query</span> 
       <p className="bg-blue-700 p-2 m-2 rounded" >
      <span className="font-semibold " > Query : </span> {res}
        </p>
      </div>

      <div className="p-4 bg-slate-800 border-2 border-slate-700 box-border m-auto rounded" >
        <div className="m-2 inline-flex text-white" >
          <button  onClick={() => setConjunction("&&")}  className={ conjunction == "&&"? "rounded-l p-2 bg-blue-500 hover:bg-blue-700  " : " rounded-l p-2 bg-gray-600 hover:bg-gray-700"}  >
          AND
          </button>
          <button onClick={() => setConjunction("||")} className={ conjunction == "||"?  " rounded-r p-2 bg-blue-500 hover:bg-blue-700  " : " rounded-r p-2 bg-gray-600 hover:bg-gray-700"} >
          OR
          </button>
        </div>
      {display}
      <button  
      className="ml-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded inline-flex items-center"
        onClick={() => {
          const d = [...query];
          d.push({ field: null, condition: null, criteria: null });
          setQuery(d);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg>

        <span>Add filter</span>
      </button>
      <div className="text-center border-box p-4" >
        <button  onClick={submitHandler}     className=" mt-4 text-center border-box w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
 >Finish</button>
      </div>
      </div>

     
    </div>
  );
};
export default App;

