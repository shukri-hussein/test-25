let discount = prompt("inter your discount");

if(discount > 100 || discount < 1) {
    alert("not accept");
}

else if (discount >= 100){
    alert("your discount is: 10%")
}
else if (discount >= 90){
    alert("your discount is 9%");
}
else if (discount >= 80){
    alert("your discount is 8%");
}else if (discount >= 70){
    alert("your discount is 7%");
}else if (discount >= 60){
    alert("your discount is 6%");
}else if (discount >= 50){
    alert("your discount is 5%");
}
else{
    alert("that is not exist");
}