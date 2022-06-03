var V = 0





function US()
{
    V = V + 1;
    document.getElementById("LSB").innerHTML = "Score:" + V;
}


function SS()
{
    localStorage.setItem("score", V);
}


function NP(){
    window.location = "activity_2.html"
}