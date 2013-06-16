(function (){

  var friends = {
  "addressBook" : [
    {
      "name": "Ashley",
      "email": "ashley@example.com",
    },
    {
      "name": "Becca",
      "email": "becca@example.com",
    },
    {
      "name": "Chad",
      "email": "chad@example.com",
    },
    {
      "name": "Dan O",
      "email": "dano@example.com",
    },
    {
      "name": "Eve",
      "email": "eve@example.com",
    },
    {
      "name": "Francesca",
      "email": "francesca@example.com",
    },
    {
      "name": "Gary",
      "email": "gary@example.com",
    },
    {
      "name": "Holly",
      "email": "holly@example.com",
    },
    {
      "name": "Ines",
      "email": "ines@example.com",
    },
    {
      "name": "Josh",
      "email": "josh@example.com",
    },
    {
      "name": "Kyle",
      "email": "kyle@example.com",
    },
    {
      "name": "Lauren",
      "email": "lauren@example.com",
    },
    {
      "name": "Mike",
      "email": "mike@example.com",
    },
    {
      "name": "Nadia",
      "email": "nadia@example.com",
    },
    {
      "name": "Orion",
      "email": "orion@example.com",
    },
    {
      "name": "Peyton",
      "email": "peyton@example.com",
    },
    {
      "name": "Quincy",
      "email": "quincy@example.com",
    },
    {
      "name": "Rachel",
      "email": "rachel@example.com",
    },
    {
      "name": "Simon",
      "email": "simon@example.com",
    },
    {
      "name": "Teri",
      "email": "teri@example.com",
    }
  ]
}

var searchForm = document.getElementById("search-form"),
    searchField = document.getElementById("q"),
    count = friends.addressBook.length,
    target = document.getElementById("output");

var address = {

  search : function(event){

    var searchValue = searchField.value,
        i;

    event.preventDefault();

    target.innerHTML = "";

    if(count > 0 && searchValue !== "") {

      for(i = 0; i < count; i = i + 1) {

        var obj = friends.addressBook[i],
            isItFound = obj.name.indexOf(searchValue);

            if(isItFound !== -1) {

              target.innerHTML += '<p> <a href="mailto:' + obj.email + '">'+ obj.name +'</a></p>'
;
        }
      }
    }
  }
}

searchField.addEventListener("keyup", address.search, false);

}());
