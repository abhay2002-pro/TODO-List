var addItems = document.getElementById('addItems');
var submit = document.getElementById('submit');

submit.addEventListener('click', function(){
    var node = document.createElement("LI");     
    var textnode = "";            
    textnode = document.createTextNode(document.getElementById('addItems').value);         
    if(textnode == ""){
        alert("You did not enter any item!!")
    }
    else{
        node.appendChild(textnode);                              
        document.getElementById("myList").appendChild(node);
    }
})




