function add()
{
    let sign='+'
    document.getElementById("sign").innerHTML=sign;
}
function sub()
{
    let sign='-'
    document.getElementById("sign").innerHTML=sign;
}
function mul()
{
    let sign='*'
    document.getElementById("sign").innerHTML=sign;
}
function div()
{
    let sign='/'
    document.getElementById("sign").innerHTML=sign;
}
function calculate()
{
    let var1;
    var1=document.getElementById('value1').value;
    
    let var2;
    var2=document.getElementById('value2').value;

    let var3;
    var3=document.getElementById("sign").innerHTML;

    let var4;

    if(var3=='+')
    {
        var4= +var1 + +var2;
    }
    else if(var3=='-')
    {

        var4= var1 - var2;
    }
    else if(var3=='*')
    {
        var4= var1 * var2;
    }
    else if(var3=='/')
    {
        var4= var1 / var2;
    }

    document.getElementById('resultid').innerHTML=var4;




}