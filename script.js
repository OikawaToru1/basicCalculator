const calculation = document.getElementById("calculation");
const answer = document.getElementById("ans");
const operator = document.getElementById("operator");
const num = document.getElementById("num2");
const clear = document.getElementById("clear");
const clearAll = document.getElementById("clearScreen");
const remove = document.getElementById("remove");
const square = document.getElementById("square");
const sqroot = document.getElementById("root");
const inverse = document.getElementById("inverse");
let num1=0, num2 =0;
let count =1;
let test1=0,test2=0;
let operatorPressed = false;
let calculationDOne = false;


const buttons = document.querySelectorAll("button");
console.log(buttons.length);
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
       if(btn.id=="number" && count >=1 && !calculationDOne)
        {   
            calculation.innerHTML = calculation.innerHTML + btn.value;
            calculation.value = calculation.innerText;
            test1 = calculation.value;
        }
        else if(btn.id == "operator" && !calculationDOne && !operatorPressed){
          operator.value = btn.value;
          operator.innerHTML= btn.value;
          count =0;
          operatorPressed= true;
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
        else if (btn.id =="operator" && calculationDOne && operatorPressed)
            {
                calc();
                operator.innerHTML=btn.value;
                calculation.innerHTML= answer.innerHTML;
                num.innerHTML="";
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
   let num1 = parseFloat(calculation.innerText);
   let num2 = parseFloat(num.innerText);
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
            if(test2==0)
                {
                    percent(calculation.innerText);
                }
            else if(test1==0)
                {
                    percent(num.innerText);
                }
            else if(test1!=0 && test2!=0)
                {
                    percent(answer.value)
                }
        }
}

function sum(n1,n2)
{   
    let sm = n1+n2;
    answer.innerHTML= sm;
    calculationDOne = true;
    test2=0;
    return sm , test2;
    
}
function sub(n1,n2)
{   
    let sm = n1-n2;
    answer.innerHTML= sm;
    calculationDOne = true;
    
    
}
function mult(n1,n2)
{   
    let sm = n1*n2;
    answer.innerHTML= sm;
    calculationDOne = true;
    test2=0;
    return sm,test2;   
}

function div(n1,n2)
{
    let dv = n1/n2;
    answer.innerHTML = dv.toFixed(3);
    calculationDOne = true;
    test2 =0;
    return dv, test2;
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
    operatorPressed= false;
    count=1;

});
clearAll.addEventListener("click",()=>{
    calculation.innerHTML="";
    answer.innerHTML= "0";
    operator.innerHTML="";
    num.innerHTML="";
    calculationDOne = false;
    operatorPressed= false;
    count=1;

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
                            operatorPressed = false;
                        }
                    else
                    {
                        calculation.innerHTML="";
                        count =1;
                    }
                }
);

square.addEventListener("click",()=>{
    if(test2==0)
    {
        let sq = calculation.innerText*calculation.innerText;
        answer.innerHTML = sq.toFixed(3);
    }
    else
    {
        calc();
        sq = answer.innerText*answer.innerText;
        answer.innerHTML = sq.toFixed(3);
    }
});

sqroot.addEventListener("click",()=>{
    if(test2==0)
        {
            let sq = Math.sqrt(calculation.innerText);
            answer.innerHTML = sq.toFixed(3);
        }
        else
        {
            calc();
            sq = Math.sqrt(answer.innerText);
            answer.innerHTML = sq.toFixed(3);
        }
    
});

inverse.addEventListener("click",()=>{
    if(test2==0)
        {
            let sq = 1/(calculation.innerText);
            answer.innerHTML = sq.toFixed(3);
        }
        else
        {
            calc();
            sq = 1/(answer.innerText);
            answer.innerHTML = sq.toFixed(3);
        }
})