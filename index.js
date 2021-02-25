const text = document.getElementById('input');
let child = 0;

isHidden = HTMLElement.hidden;
HTMLElement.hidden = true | false;

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

    input.classList.add("form-control");
    input.hidden = true;
    input.id = child + 'input';
    // input.classList.add('form-control');

    divChaild.appendChild(value);
    value.appendChild(span);
    span.innerHTML = text.value;
    value.appendChild(input);
    // input.style.visibility = "hidden";
    
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
    removeList(child, hr);
    editList(child, input, span);
}); 


function editList(child, input, span){
    document.getElementById(child + 'edit').onclick= function() {myFunction()};
        function myFunction(){
            // .innerText = text.value;
            input.hidden = false;
            span.hidden = true;
            document.getElementById(child + 'input').value = span.innerHTML;
            saveList( child, span, input );
        }
   
}

function saveList( child, span, input ){
    document.getElementById(child + 'save').onclick = function(){ myFunction()}
        function myFunction(){
            let editText = document.getElementById(child + 'input').value;
            span.innerHTML = editText;
            span.hidden = false;
            input.hidden = true;
        }
}

function removeList(child, hr){
    document.getElementById(child).addEventListener('click', function(){
        document.getElementById('child' + child).remove();
        console.log(hr);
   });
}
