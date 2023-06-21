function collapsible(event){
    var targetID = event.target.getAttribute("value");

    if(document.getElementById(targetID).style.display == "none"){
        document.getElementById(targetID).style.display = "block";

    }
    else{
        document.getElementById(targetID).style.display = "none";
    }
    
}

function navigateTo(url){
    window.location.href = url;
}