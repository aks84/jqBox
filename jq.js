function changeSE(change){
    window.location=change;
}


function translateNow(from, to){
   this.from = from;
   this.to = to;

    window.location="http://www.microsofttranslator.com/bv.aspx?from="+from+"&to="+to+"&a=https://eatalgae.org"

    
    

}

$(document).ready(function(){
    $(".viewCode").click(function(){
        let displayHere = document.getElementById("myViewArea").value = 
        $("body").html();
    });
});