function openLink()
{
    var favorite = [];
    $.each($("input[type='checkbox']:checked"), function(){
        favorite.push($(this).val());
    });
    
    console.log(favorite.length);
    favorite.forEach(element => {
        window.open(element);
    });
 
}
function showHide(){
    
    var x = document.getElementById("setting");
    if (x.style.display === "none") {
        x.style.display = "table";
    } else {
        x.style.display = "none";
    }
   
}

