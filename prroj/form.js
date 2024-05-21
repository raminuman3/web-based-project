// Switch form functions
let obj = new Date()
let date = obj.getDate() + "/" + (obj.getMonth() + 1) + "/" + obj.getFullYear()
let time = obj.toLocaleTimeString()
document.getElementById('Date').innerText = 'Date: ' + date
document.getElementById('Time').innerText = 'Time: ' + time


// Toggle password visability in the Create form
function togglePassword()
{
    if (document.getElementById('pas').type == 'password')
    {
        document.getElementById('pas').type = 'text'
        document.getElementById('con').type = 'text'
    }
    else
    {
        document.getElementById('pas').type = 'password'
        document.getElementById('con').type = 'password'
    }
}

function togglePassword2()
{
    if (document.getElementById('pas1').type == 'password')
    {
        document.getElementById('pas1').type = 'text'
    }
    else
    {
        document.getElementById('pas1').type = 'password'
    }
}

var acc = false
function valacc() {
    document.getElementById('nameMsg').innerHTML = ''
    document.getElementById('emailMsg').innerHTML = ''
    document.getElementById('phoneMsg').innerHTML = ''
    document.getElementById('pasMsg').innerHTML = ''
    document.getElementById('conMsg').innerHTML = ''
    valun();
    valml();
    valphn();
    valpas();
    valcon();
    if(valun() && valml() && valphn() && valpas() && valcon())
    {
        document.getElementById('accMsg').innerHTML = '&nbsp; Welcome! You successfully been registerd and you\'re ready to order <3'
        acc = true
    }
}

function valun() {
    var n = document.getElementById('name').value
    if (n == "")
    {
        document.getElementById('nameMsg').innerHTML = '&nbsp; Enter Your Username'
    }
    else 
    {
        document.getElementById('nameMsg').innerHTML = ''
        return true
    }

    
}

function valml() {
    var ml = document.getElementById('email').value
    if (ml == "")
    {
        document.getElementById('emailMsg').innerHTML = '&nbsp; Enter Your Email'
        return flase
    }

    else if (ml.lastIndexOf('@gmail.com') == -1 && ml.lastIndexOf('@hotmail.com') == -1)
    {
        document.getElementById('emailMsg').innerHTML = '&nbsp; Enter a valid Email'
        return false  
    }

    else
    {
        document.getElementById('emailMsg').innerHTML = ''
        return true
    }
}

function valphn() {
    var ph = document.getElementById('phone').value
    var allnums = true

    for(var i=0; i<ph.length;i++)
    {
        if(ph[i] > '9' || ph[i] < '0')
        allnums = false
    }

    if (ph == "")
    {
        document.getElementById('phoneMsg').innerHTML = '&nbsp; Enter Your Phone Number'
        return flase
    }

    else if (!allnums)
    {
        document.getElementById('phoneMsg').innerHTML = '&nbsp; Your Phone Number could only contain numbers'
        return false  
    }

    else if (ph[0] != '0' || ph.length != 10)
    {
        document.getElementById('phoneMsg').innerHTML = '&nbsp; Your Phone Number must consist of 10 numbers begining with 0'
        return false  
    }

    else
    {
        document.getElementById('phoneMsg').innerHTML = ''
        return true
    }
}

function valpas() {
    var p = document.getElementById('pas').value
    var allnums = true
    var allchars = true

    for(var i=0; i<p.length;i++)
    {
        if(p[i] > '9' || p[i] < '0')
        allnums = false
    }

    for(var i=0; i<p.length;i++)
    {
        if(p[i] < 'A' || (p[i] > 'Z' && p[i] < 'a') || p[i] > 'z')
        allchars = false
    }

    if (p == "")
    {
        document.getElementById('pasMsg').innerHTML = '&nbsp; Enter your password'
        return false
    }

    else if (p.length < 8)
    {
        document.getElementById('pasMsg').innerHTML = '&nbsp; your password must be at least 8 charaters long'
        return false
    }

    else if (allchars)
    {
        document.getElementById('pasMsg').innerHTML = '&nbsp; Password must contain numbers'
        return false
    }

    else if (allnums)
    {
        document.getElementById('pasMsg').innerHTML = '&nbsp; Password must contain alphabet characters'
        return false
    }

    else
    {
        document.getElementById('pasMsg').innerHTML = ''
        return true
    }
}

function valcon() {
    var c = document.getElementById('con').value
    var p = document.getElementById('pas').value

    if (c == "")
    {
        document.getElementById('conMsg').innerHTML = '&nbsp; Confirm your password'
        return false
    }

    else if (c != p)
    {
        document.getElementById('conMsg').innerHTML = '&nbsp; Password does not match'
        return false
    }

    else
    {
        document.getElementById('conMsg').innerHTML = ''
        return true
    }

    
}

// Second form code
let output = ""
let sum = 0
let prices = [3.99, 4.99, 4.99, 10.99];

let a = Number(document.getElementById("da").value);
var b = Number(document.getElementById("db").value);//none of these work
const c = Number(document.getElementById("dc").value);
const d = Number(document.getElementById("de").value);



function print()
{
    


    window.alert(Number(document.getElementById("da").value))// should work
    
}
