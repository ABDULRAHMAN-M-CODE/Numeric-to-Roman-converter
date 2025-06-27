const input=document.getElementById("number")
const convert=document.getElementById("convert-btn")

const output =document.getElementById("output")
let remainder;
const lookup_table=[
{"Roman":"I",
 "numeric":1   
},
{"Roman":"IV",
 "numeric":4   
},
{"Roman":"V",
 "numeric":5   
},
{"Roman":"IX",
 "numeric":9   
},
{"Roman":"X",
 "numeric":10   
},
{"Roman":"XL",
 "numeric":40   
},
{"Roman":"L",
 "numeric":50   
},
{"Roman":"XC",
 "numeric":90   
},
{"Roman":"C",
 "numeric":100   
},
{"Roman":"CD",
 "numeric":400   
},
{"Roman":"D",
 "numeric":500   
},
{"Roman":"CM",
 "numeric":900   
},
{"Roman":"M",
 "numeric":1000   
}

]


console.log(`non_final_result is :${non_final_result}`)

const logic=()=>{

    const result=[]
    output.innerHTML=``
  if(input.value==""){

      output.innerHTML+=`<p>Please enter a valid number</p>`
      output.classList.remove("hidden")
      output.classList.add("error_style")
      return


  }
  else if (!(parseInt(input.value)<=3999)){
    output.innerHTML+=`<p>Please enter a number less than or equal to 3999.</p>`
    output.classList.add("error_style")
    output.classList.remove("hidden")
    return
  }
  else if (!(parseInt(input.value)>0)) {
      output.innerHTML+=`<p>Please enter a number greater than or equal to 1</p>`
      output.classList.add("error_style");
      output.classList.remove("hidden")
      return

  }
  else{
    //Parsing input
    let numericInput=parseInt(input.value);
    
    //remove pink color
    output.classList.remove("error_style")
    
    const match=lookup_table.filter((obj)=>obj.numeric<=numericInput).at(-1);
    
    const match_symbol=match["Roman"]
    const match_numeric=match["numeric"]
      
      let indexOfDic=lookup_table.findIndex((obj)=>obj==match);
      
      //What the first  location Accessed
      console.log(`index of the first match :${indexOfDic}`)
     
     //What the first symbol Accessed
     //console.log(`the match :${firstMatch_symbol}\n`)
    //adding first match to the result
    result.push(match_symbol)
      if (numericInput==match_numeric){
          //console.log("your Entered number required one symbol\n")
          //console.log(`The result  is :${result}\n`)
          
          return result;

      }
    numericInput-=match_numeric
    
    //Result after acessing first location
    //console.log(result)
    
    
   
    while(indexOfDic>=0){

    
      
      


         
         
            //check the remainder for testing 
            //console.log("remain is :",reminder)
        
        if (numericInput>=lookup_table[indexOfDic]["numeric"]){
            
            result.push(lookup_table[indexOfDic]["Roman"]) 
            numericInput -= lookup_table[indexOfDic]["numeric"];  
       
            continue  
          
          

        }
            
        

          indexOfDic=indexOfDic-1;
          


        
        
          
       



        
          



        

      
         



    }
    return result;

  }
  

 
  


  
}
let non_final_result;
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if(input.value){
         non_final_result = logic();
        const string=non_final_result.join("")
   output.innerHTML+=`<p>${string}</p>`
        //console.log(`non_final_result is :${non_final_result}`);
        //console.log("done")
    }
    
  }
});

//this is just like ISR in embedded assembly firmware
convert.addEventListener("click", () => {
   non_final_result = logic();
   const string=non_final_result.join("")
   output.innerHTML+=`<p>${string}</p>`
  //console.log(`non_final_result is :${non_final_result}`);

  //console.log("done")
});




