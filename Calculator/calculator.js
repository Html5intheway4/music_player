function AdditionBy()
{
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
    result = Number(num1) + Number(num2);
    document.getElementById("result").value = result;
}
function SubtractionBy()
{
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
    result = Number(num1) - Number(num2);
    document.getElementById("result").value = result;
}
function MultiplicationBy()
{
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
    result = Number(num1) * Number(num2);
    document.getElementById("result").value = result;
}
function DivisionBy()
{
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
    result = Number(num1) / Number(num2);
    document.getElementById("result").value = result;
}