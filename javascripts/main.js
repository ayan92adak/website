var ourHeadlines = document.getElementById("our_hdl");
var listitems = document.getElementById("our_list").getElementsByTagName("li");

for(var i=0;i<listitems.length;i++) {
    listitems[i].addEventListener("click", activateItem);
}

function activateItem(){
    our_hdl.innerHTML = this.innerHTML;
}