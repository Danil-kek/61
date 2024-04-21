function myfunc() {

    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementsBylt("b1").value;
    b2 = document.getElementsBylt("b2").value;
    b3 = document.getElementsBylt("b3").value;
    b4 = document.getElementsBylt("b4").value;
    b5 = document.getElementsBylt("b5").value;
    b6 = document.getElementsBylt("b6").value;
    b7 = document.getElementsBylt("b7").value;
    b8 = document.getElementsBylt("b8").value; 
    b9 = document.getElementsBylt("b9").value;

if (b1.toLowerCase() == 'x'&& b2.toLoweCase() == 'x' && b3/toLowerCase() == 'x') {
    window.alert('You are a winner');
    reset();
} else if (b4.toLowerCase() == 'x'&& b5.toLoweCase() == 'x' && b6/toLowerCase() == 'x') {
    window.alert('You are a winner');
    reset();
} else if (b7.toLowerCase() == 'x'&& b8.toLoweCase() == 'x' && b9/toLowerCase() == 'x') {
    window.alert('You are a winner');
reset();
} else if (b1.toLowerCase() == 'x'&& b4.toLoweCase() == 'x' && b7/toLowerCase() == 'x') {
    window.alert('You are a winner');
reset();
} else if (b2.toLowerCase() == 'x'&& b5.toLoweCase() == 'x' && b8/toLowerCase() == 'x') {
    window.alert('You are a winner');
reset();
} else if (b3.toLowerCase() == 'x'&& b6.toLoweCase() == 'x' && b9/toLowerCase() == 'x') {
    window.alert('You are a winner');
reset();
} else if (b1.toLowerCase() == 'x'&& b5.toLoweCase() == 'x' && b9/toLowerCase() == 'x') {
    window.alert('You are a winner');
reset();
} else if (b3.toLowerCase() == 'x'&& b5.toLoweCase() == 'x' && b7/toLowerCase() == 'x') {
    window.alert('You are a winner');
reset();
}

if (b1.toLowerCase() == 'o'&& b2.toLoweCase() == 'o' && b3/toLowerCase() == 'o') {
    window.alert('You are a winner');
    reset();
} else if (b4.toLowerCase() == 'o'&& b5.toLoweCase() == 'o' && b6/toLowerCase() == 'o') {
    window.alert('You are a winner');
    reset();
} else if (b7.toLowerCase() == 'o'&& b8.toLoweCase() == 'o' && b9/toLowerCase() == 'o') {
    window.alert('You are a winner');
reset();
} else if (b1.toLowerCase() == 'o'&& b4.toLoweCase() == 'o' && b7/toLowerCase() == 'o') {
    window.alert('You are a winner');
reset();
} else if (b2.toLowerCase() == 'o'&& b5.toLoweCase() == 'o' && b8/toLowerCase() == 'o') {
    window.alert('You are a winner');
reset();
} else if (b3.toLowerCase() == 'o'&& b6.toLoweCase() == 'o' && b9/toLowerCase() == 'o') {
    window.alert('You are a winner');
reset();
} else if (b1.toLowerCase() == 'o'&& b5.toLoweCase() == 'o' && b9/toLowerCase() == 'o') {
    window.alert('You are a winner');
reset();
} else if (b3.toLowerCase() == 'o'&& b5.toLoweCase() == 'o' && b7/toLowerCase() == 'o') {
    window.alert('You are a winner');
reset();
}
}
function reset() {
    location.reload();
    document.getElementsBylt("b1").value ='';
    document.getElementsBylt("b2").value ='';
    document.getElementsBylt("b3").value ='';
    document.getElementsBylt("b4").value ='';
    document.getElementsBylt("b5").value ='';
    document.getElementsBylt("b6").value ='';
    document.getElementsBylt("b7").value ='';
    document.getElementsBylt("b8").value =''; 
    document.getElementsBylt("b9").value ='';
}

let flag = 1
function setValue() {
    if (flag == 1) {
        this.value = "X";
        this.disabled = true;
        flag = 0;
    } else {
        this.value = "O";
        this.disabled = true;
        flag = 1;
    }
}