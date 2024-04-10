let iput_1 = document.getElementById("input_1");
let iput_2 = document.getElementById("input_2");

document.getElementById("add").addEventListener("click", function(){
    alert(parseInt(iput_1.value) + parseInt(iput_2.value));
});
document.getElementById("sub").addEventListener("click", function(){
    alert(parseInt(iput_1.value) - parseInt(iput_2.value));
});
document.getElementById("mul").addEventListener("click", function(){
    alert(parseInt(iput_1.value) * parseInt(iput_2.value));
});
document.getElementById("div").addEventListener("click", function(){
    alert(parseInt(iput_1.value) / parseInt(iput_2.value));
});

