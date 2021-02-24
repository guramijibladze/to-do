const text = document.getElementById('input');

document.getElementById('button').addEventListener('click', function(){
    const divChaild = document.createElement('div');
    document.getElementById('divParent').appendChild(divChaild);
    divChaild.classList.add("d-flex", "justify-content-between");

    const value = document.createElement('div');
    const fun = document.createElement('div');
    const span = document.createElement('span');
    // const 
    divChaild.appendChild(value);
    value.appendChild(span);
    span.innerHTML = text.value;
    divChaild.appendChild(fun);
    value.classList.add("value", "p-2");
    fun.classList.add("fun", "row");
    
    for(let i = 0; i < 3; i++){
        let div = document.createElement('div');
        
        if( i == 0 ){
            div.insertAdjacentHTML("afterbegin",'<i class="far fa-check-circle"></i>');
            div.classList.add('save', 'p-2');
        }else if( i == 1 ){
            div.insertAdjacentHTML ("afterbegin",'<i class="far fa-edit"></i>');
            div.classList.add('edit', 'p-2');
        }else{
            div.insertAdjacentHTML ("afterbegin",'<i class="far fa-trash-alt"></i>');
            div.classList.add('delete', 'p-2');
        }
        fun.appendChild(div);
    }

    text.value = "";

    const x = document.querySelector('.save');
        x.addEventListener('click', function(){
        console.log('gurami')
    })
});

