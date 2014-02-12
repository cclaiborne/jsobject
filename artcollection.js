function Art (title, year, value){
  this.title = title;
  this.year = year;
  this.value = value;
}

Art.prototype.toString = function()
{
return "This painting named " + this.title +
" was painted in the year: " + this.year +
" and has a value of: " + this.value
}


var waterfront = new Art("Waterfront", "1932", "$200")
console.log(waterfront.toString() )
