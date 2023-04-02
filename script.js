let string = "";
let buttons = document.querySelectorAll('.btn');
addEventListener('click',function(e){
    if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('.input').value = string;
    }
    else{
        console.log(e.target)
        string += e.target.innerHTML;
        document.querySelector('.input').value = string;
    }
})
