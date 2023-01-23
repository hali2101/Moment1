// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//lägger till färg på menyvalet som är aktivt

//sätter länken till 0
var current = 0;
//hämtar elementet för länken
var navlinks = document.getElementsByClassName("li-nav");
//loppar igenom listan med länkar
for (var i = 0; i < navlinks.length; i++) {
  //kontroll om sidans url är densamma som länkens
  if (document.links[i].href === document.URL) {
    current = i;
  }
}
//sätter länkens klass till current = css-stylingen
navlinks[current].className = "current";
