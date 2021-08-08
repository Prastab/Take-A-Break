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
