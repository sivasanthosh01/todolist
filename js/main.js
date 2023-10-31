var form=document.querySelector("form");
var input=document.querySelector("#input");
var post=document.querySelector("#post");
// console.log(form,input,post);

form.addEventListener("submit",function(e){
    e.preventDefault();
    addItem()
})
let data={};

function addItem(){
    data["text"]=input.value;
    // console.log(data);
    create()
}

function create(){
    post.innerHTML+=`<div>
    <p>${data.text}</p>
    <span>
    <i onClick="editPost(this)" class="fa fa-pencil-square-o" aria-hidden="true"></i>
    <i onClick="deletePost(this)" class="fa fa-trash-o" aria-hidden="true"></i>
    </span>
    </div>`
    input.value=" ";
}

function editPost(e){
var editName=e.parentElement.previousElementSibling.innerHTML;
    // console.log(editName);
    input.value=editName;
    e.parentElement.parentElement.remove();
}

function deletePost(e){
    e.parentElement.parentElement.remove();
}