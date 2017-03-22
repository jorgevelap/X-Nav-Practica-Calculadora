

screen=document.getElementById("Screen");
screen2=document.getElementById("Screen2");
function addNumber(num){
  if(screen.innerHTML.length==10){
      screen2.innerHTML="Err:Demasiados caracteres"
  }else{
      screen.innerHTML+=num;
  }
}

function addOperand(num){
  screen.innerHTML+=num;
}

function equal(){
  try {
     x = eval(screen.innerHTML);
     screen.innerHTML=x;
  }catch(err){
     screen2.innerHTML="Err: No se puede realizar";
  }
}

function del(){
  screen2.innerHTML=" "
  x=screen.innerHTML.substr(0,(screen.innerHTML.length)-1);
  screen.innerHTML=x;
}

function del2(){
  screen2.innerHTML=" "
  x=screen.innerHTML.substr(0,0);
  screen.innerHTML=x;
}


$(document).keypress(function(e){
  var number=e.which;
  if(number<=57 && number >=48){
    addNumber(number-48)
  }

  if(number==47){
    addNumber("/");
  }
  if(number==46){
    addNumber(".");
  }

  if(number==45){
    addNumber("-");
  }

  if(number==43){
    addNumber("+");
  }

  if(number==42){
    addNumber("*");
  }

  if(number==61 || number==13){
    equal();
  }

  if(number==99 || number==8){
    del();
  }
});
