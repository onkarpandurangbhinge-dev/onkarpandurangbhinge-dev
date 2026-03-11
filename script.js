```javascript
function openSection(place){

var sections = document.querySelectorAll(".place");

sections.forEach(function(section){
section.style.display = "none";
});

document.getElementById(place).style.display = "block";

}
```
