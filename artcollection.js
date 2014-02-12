function Art (title, artist, year, value){
  this.title = title;
  this.artist = artist;
  this.year = year;
  this.value = value;
}

Art.prototype.toString = function()
{
return "The painting named " + this.title +
" was painted in the year of " + this.year +
" by " + this.artist +
" and has an estimated value of " + this.value + "."
}

var waterfront = new Art("Waterfront", "Chris Jaffey", "1932", "$200");
var starrynight = new Art("Starry Night", "Vincent Van Gogh", "1888", "$15000000");
console.log(waterfront.toString())
console.log(starrynight.toString())


