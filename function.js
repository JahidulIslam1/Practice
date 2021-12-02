function myFun(a,b){
    console.log(a-b);
}
//myFun(10,5);


var globalVariable = 10;
function fun1(){
    calVariable = 6;
}

function fun2(){
    var outPut = "";
    if (globalVariable != "undifine"){
        outPut = "globalVariable : " + globalVariable;
    }
    if (calVariable != "undifine"){
        outPut += "localVariable :"  + calVariable;
    }
    console.log(outPut);
}
fun1();
fun2();