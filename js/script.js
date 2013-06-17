function getHTTPObject() {

  var xhr;

  if (window.XMLHttpRequest) {

    xhr = new XMLHttpRequest();

  } else if (window.ActiveXObject) {

    xhr = new ActiveXObject("Msxml2.XMLHTTP");

  }

  return xhr;
}

function ajaxCall(dataUrl, callback) {

  var request = getHTTPObject();

  request.onreadystatechange = function() {

    if ( request.readyState === 4 && request.status === 200 ) {

      var friends = JSON.parse(request.responseText);

      if(typeof callback === "function"){

        callback(friends);

      }
    }
  }

  request.open("GET", "dataUrl", true)
  request.send(null);

}

(function (){

  var searchForm = document.getElementById("search-form"),
      searchField = document.getElementById("q"),
      getAllButton = document.getElementById("get-all"),
      target = document.getElementById("output");

  var address = {

    search : function(event){

      var output = document.getElementById("output");

      ajaxCall('data/friends.json', output, function (data) {

      var searchValue = searchField.value,
          addressBook = data.addressBook,
          count = addressBook.length,
          i;

      event.preventDefault();

      target.innerHTML = "";

      if(count > 0 && searchValue !== "") {

        for(i = 0; i < count; i = i + 1) {

          var obj = addressBook[i],
              isItFound = obj.name.indexOf(searchValue);

              if(isItFound !== -1) {

                target.innerHTML += '<p> <a href="mailto:' + obj.email + '">'+ obj.name +'</a></p>'
  ;
          }
        }
      }
    });
  },

    getAllContacts : function () {

      var output = document.getElementById("output");

      ajaxCall('data/friends.json', output, function (data) {

        var addressBook = data.addressBook
            count = addressBook.length,
            i;

            target.innerHTML = "";

            if(count > 0) {

              for(i =0; i < count; i = i + 1) {

                var obj = addressBook[i];

                target.innerHTML += '<p><a href="mailto:' + obj.email + '">' + obj.name +'</a></p>';
              }
            }
      });
    },
  }

  searchField.addEventListener("keyup", address.search, false);

  getAllButton.addEventListener("click", address.getAllContacts, false);

})();
