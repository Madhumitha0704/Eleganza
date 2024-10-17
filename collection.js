var search=document.getElementById("search")
var productContainer=document.getElementById("product")
var productList=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    var enteredValue=event.target.value.toUpperCase()

    for(i=0;i<productList.length;i++)
    {
        var name=productList[i].querySelector("p").textContent

        if(name.toUpperCase().indexOf(enteredValue)<0){
              productList[i].style.display="none"
        }
        else{
            productList[i].style.display="block"
        }
    }

})