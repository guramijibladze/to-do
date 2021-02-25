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
    // const 
    divChaild.appendChild(value);
    value.appendChild(span);
    span.innerHTML = text.value;
    divChaild.appendChild(fun);
    value.classList.add("value", "p-2");
    fun.classList.add("fun", "row");
    
    for(let i = 0; i < 3; i++){
        var div = document.createElement('div');
        
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
    div.id = child;

    text.value = "";

    listEddit();

    // let red = document.getElementById(child).childNodes;
    // let bla = document.getElementById(child).childNodes;
    // console.log(bla);
    

    
}); 

function listEddit(el){
    // document.querySelector('.save').addEventListener('click', function(){
    //     console.log('gurami')
    // });

    // document.querySelector('.edit').addEventListener('click', function(){
    //     console.log('gurami')
    // });

    document.getElementById(child).addEventListener('click', function(){
        document.querySelector(".fun").parentElement.remove();
   });
}


// function mouseOver() {
//     document.getElementById("demo").style.color = "red";
//   }
  
// function mouseOut() {
//     document.getElementById("demo").style.color = "black";
// }

