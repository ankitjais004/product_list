$(document).ready(function(){
 $("#addEntry").click(function(){
    $(".temp").append("<li> <label> Product Name </label> <input id=product_name><label> Price </label> <input id=price></li>");
  });

});
