window.addEventListener("load", function()
{
  var nodes = document.querySelectorAll("nav >a > span");

  for(var i = 0; i< nodes.length; i++){
    nodes[i].style.animationDelay = (i/2)+ "s";
  }
});
