const task3Element = document.getElementById('task-3');


function noParam(){   
    alert('Hello there!');   
}

function Param(name){
    alert('Hello, ' + name);
}

function bNewFunc(s1, s2, s3){
    return alert(s1+s2+s3);
}

//noParam();
task3Element.addEventListener('click', noParam);
Param('David');
bNewFunc('Hello ', 'darkness ', 'my old friend...');