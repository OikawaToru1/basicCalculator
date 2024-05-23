const calculation = document.getElementById("calculation");
const answer = document.getElementById("ans");
const operator = document.getElementById("operator");
const num = document.getElementById("num2");
const clear = document.getElementById("clear");
const remove = document.getElementById("remove");
let num1=0, num2 =0;
let count =1;
let test1=0,test2=0;
let calculationDOne = false;


const buttons = document.querySelectorAll("button");
console.log(buttons.length);
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
       if(btn.id=="number" && count >=1 && !calculationDOne)
        {   
            calculation.innerHTML = calculation.innerHTML + btn.value;
            calculation.value = btn.value;
            test1 = calculation.value;
        }
        else if(btn.id == "operator" && !calculationDOne){
          operator.value = btn.value;
          operator.innerHTML= btn.value;
          count =0;
        }
        else if(btn.id == "number" && count ==0 && !calculationDOne)
        {
            num.value = btn.value;
            num.innerHTML = num.innerHTML + btn.value;
            test2 = num.value;

        }
        else if(btn.id=="operate")
        {
            calc();
            count =1;
        }
        else if (btn.id =="operator" && calculationDOne)
            {
                operator.innerHTML=btn.value;
                num.innerHTML="";
                calculation.innerHTML= answer.innerHTML;
                answer.innerHTML= 0;
                alert(`Calculation is done: ${calculationDOne}`);
                count =0;

            }
        else if(btn.id =="number" && calculationDOne)
            {
                num.value = btn.value;
                 num.innerHTML = num.innerHTML + btn.value;
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
    else if (opt == "%")
        {
            if(test1!=0 && test2==0)
                {
                    percent(test1);
                }
            else if(test1==0 && ntest!=0)
                {
                    percent(test2);
                }
            else 
                {
                    calc();
                    percent(answer.value)
                }
        }
}

function sum(n1,n2)
{   
    let sm = n1+n2;
    answer.innerHTML= sm;
    calculationDOne = true;
    return sm;
    
}
function sub(n1,n2)
{   
    let sm = n1-n2;
    answer.innerHTML= sm;
    calculationDOne = true;
    return sm;
    
}
function mult(n1,n2)
{   
    let sm = n1*n2;
    answer.innerHTML= sm;
    calculationDOne = true;
    return sm;   
}

function div(n1,n2)
{
    let dv = n1/n2;
    answer.innerHTML = dv;
    calculationDOne = true;
    return dv;
}
function percent(num)
{
    let dv = num/100 ;
    answer.innerHTML = dv;
    calculationDOne = true;
    return dv;
}


clear.addEventListener("click",()=>{
    calculation.innerHTML="";
    answer.innerHTML= "0";
    operator.innerHTML="";
    num.innerHTML="";
    calculationDOne = false;

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
                            answer.innerHTML="0";
                        }
                    else
                    {
                        calculation.innerHTML="";
                        count =1;
                    }
                }
)