alert("Welcome my web page")
var opt= prompt("enter one sing of this + , -, *, /")
var a = prompt("enter a fisrt number")
var b = prompt("enter a secound number")
if(opt == "+"){
    alert(a + b)
}
else if(opt == "-"){
    alert ( a - b )
}
else if(opt == "*"){
    alert(a * b)
}
else if(opt == "/"){
    alert(a / b)
}
else{
    ("enter one sing of this + , -, *, /")
}

var mov= prompt(" How many tictk parches you? , every tickt price 500Rs!")
var mov1=(mov*500)
var aaa="Total tickt price:" + mov1
alert(aaa)

var mov= prompt("multiplication table of 4 , write the any number")
var mov1=(mov*4)
var aaa="it 4 of Table :"  + mov1
alert(aaa)

var mov= prompt("Temperature Converter of Faghrien heat to centigread")
var mov1=((mov-32)*5/9)
var aaa="centigeard: " + mov1
alert(aaa)

var mov= prompt("Temperature Converter of centigread to Faghrien heat ")
var mov1=((mov*9/5)+32)
var aaa="Fahrien heat: " + mov1
alert(aaa)


