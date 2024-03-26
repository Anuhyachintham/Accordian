import React, { useState } from "react";
import data from "./data";
const Accordian = () => {
  const[selected, setSelected] = useState();
  const[enableMultiSelection,setEnableMultiSelection]=useState(false);
  const[multiple,setMultiple]=useState([])
  
  const handleClick=(getCurrentId)=>{
    setSelected(getCurrentId===selected?null:getCurrentId)
  }
  const handleMultiSelection=(getCurrentId)=>{
    let copyMultiple=[...multiple];
    let findIndexOf=copyMultiple.indexOf(getCurrentId)
    if(findIndexOf===-1){
    copyMultiple.push(getCurrentId)
    }
    else{
        copyMultiple.slice(findIndexOf,1)
    }
    setMultiple(copyMultiple);
    console.log(selected,multiple);

  }
  return (
    <div className="wrapper">
        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multiselection</button>
      <div className="accordian">
        {data && data.length >= 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div className="title" key={dataItem.id} onClick={enableMultiSelection?()=>handleMultiSelection(dataItem.id):()=>handleClick(dataItem.id)}>
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
             
              {enableMultiSelection?multiple.indexOf(dataItem.id)!==-1 && <div className="content">{dataItem.answer}</div>:
              selected===dataItem.id&&<div className="content">{dataItem.answer}</div>}
            </div>
          ))
        ) : (
          <div>null</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
