const calculation = document.getElementById("calculation");
const answer = document.getElementById("ans");
const operator = document.getElementById("operator");
const num = document.getElementById("num2");
const clear = document.getElementById("clear");
const remove = document.getElementById("remove");
let num1=0, num2 =0;
let count =1;


const buttons = document.querySelectorAll("button");
console.log(buttons.length);
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
       if(btn.id=="number" && count >=1)
        {   
            calculation.innerHTML = calculation.innerHTML + btn.value;
            calculation.value = btn.value;
        }
        else if(btn.id == "operator"){
          operator.value = btn.value;
          operator.innerHTML= btn.value;
          count =0;
        }
        else if(btn.id == "number" && count ==0)
        {
            num.value = btn.value;
            num.innerHTML = num.innerHTML + btn.value;

        }
        else
        {
            calc();
            count =1;
        }
    })
});

function calc()
{
   let num1 = parseInt(calculation.innerText);
   let num2 = parseInt(num.innerText);
   let opt = operator.innerText;
  if(opt == "+")
    {
        sum(num1,num2);
    }
    else if(opt == "-")
        {
            sub(num1,num2);
        }
    else if(opt == "*")
        {
            mult(num1,num2);
        }
    else if (opt == "/")
        {
            div(num1,num2);
        }
}

function sum(n1,n2)
{   
    let sm = n1+n2;
    answer.innerHTML= sm;
    return sm;
    
}
function sub(n1,n2)
{   
    let sm = n1-n2;
    answer.innerHTML= sm;
    return sm;
    
}
function mult(n1,n2)
{   
    let sm = n1*n2;
    answer.innerHTML= sm;
    return sm;   
}

function div(n1,n2)
{
    let dv = n1/n2;
    answer.innerHTML = dv;
    return dv;
}


clear.addEventListener("click",()=>{
    calculation.innerHTML="";
    answer.innerHTML= "0";
    operator.innerHTML="";
    num.innerHTML="";

});

remove.addEventListener("click",()=>
{
                    if (num.innerHTML !="")
                        {
                            num.innerHTML="";
                            count =0;
                        }
                    else if (operator.innerHTML != "")
                        {
                            operator.innerHTML="";
                        }
                    else
                    {
                        calculation.innerHTML="";
                        count =1;
                    }
                }
)