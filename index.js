const text = document.getElementById('input');
let child = 0;

document.getElementById('button').addEventListener('click', function(){
    child++;

    const divChaild = document.createElement('div');
    document.getElementById('divParent').appendChild(divChaild);
    divChaild.classList.add("d-flex", "justify-content-between");
    divChaild.id = "child" + child;

    const value = document.createElement('div');
    const fun = document.createElement('div');
    const span = document.createElement('span');
    const input = document.createElement('input');
    input.id = child + 'input';
    // input.classList.add('form-control');

    // const 
    divChaild.appendChild(value);
    value.appendChild(span);
    span.innerHTML = text.value;
    // console.log(span.innerHTML)
    value.appendChild(input);
    input.style.visibility = "hidden";
    
    divChaild.appendChild(fun);
    value.classList.add("value", "p-2");
    fun.classList.add("fun", "row");
    
    for(let i = 0; i < 3; i++){
        var div = document.createElement('div');
        
        if( i == 0 ){
            div.insertAdjacentHTML("afterbegin",'<i class="far fa-check-circle"></i>');
            div.classList.add('save', 'p-2');
            div.id = child + "save";
        }else if( i == 1 ){
            div.insertAdjacentHTML ("afterbegin",'<i class="far fa-edit"></i>');
            div.classList.add('edit', 'p-2');
            div.id = child + "edit";
        }else{
            div.insertAdjacentHTML ("afterbegin",'<i class="far fa-trash-alt"></i>');
            div.classList.add('delete', 'p-2');
            div.id = child;
        }
        fun.appendChild(div);
    }
    
    text.value = "";

    removeList(child);
    editList(child, input, span);
    
    
}); 


function editList(child, input, span){
    document.getElementById(child + 'edit').onclick= function() {myFunction()};
        function myFunction(){
            // .innerText = text.value;
            input.style.visibility = "visible";
            span.style.visibility = "hidden";
            document.getElementById(child + 'input').value = span.innerHTML;
            // console.log(span.innerHTML);
        }

        saveList( child, span, input );
      
}

function saveList( child, span, input ){
    document.getElementById(child + 'save').onclick = function(){ myFunction()}
        function myFunction(){
            let editText = document.getElementById(child + 'input').value;
            span.innerHTML = editText;
            span.style.visibility = "visible";
            input.style.visibility = "hidden";
        }
}

function removeList(child){
    document.getElementById(child).addEventListener('click', function(){
        document.getElementById('child' + child).remove();
   });
}
