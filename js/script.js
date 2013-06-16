var friends = {

  "addressBook" : [
    {
      "name": "Nadia",
      "email": "nadia@example.com",
    },
    {
      "name": "Peyton",
      "email": "peyton@example.com",
    },
    {
      "name": "Ashley",
      "email": "ashley@example.com",
    },
    {
      "name": "Becca",
      "email": "becca@example.com",
    }
  ]
}

var object = friends.addressBook,
    friendsCount = object.length,
    target = document.getElementsByTagName("body")[0],
    i;

    if(friendsCount > 0) {
      for (i = 0; i < friendsCount; i = i + 1) {
        var item = object[i],
            name = item.name,
            email = item.email;

        target.innerHTML += '<p><a href="mailto'+ email +'">' + name + '</a></p>';
      }
    }
/* var adr = {

  getAllContacts : function(){

    var target = document.getElementById("output");
    var book = friends.addressBook;
    var count = book.length;
    var i;

    target.innerHTML = "";

    if(count > 0){
      for(i = 0; i < count; i = i + 1) {
        var obj = book[i],

        target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>'
      }
    }
  }
} */