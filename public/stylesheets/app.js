$('#get-dish').on('click', function(event) {
  event.preventDefault();
  binding.pry

  var request = $.ajax({
    method: "GET",
    url: "/dishes/random.json"
  })

  request.done(function(data){
    alert("Your random dish is: " + data["dish"]);
  });
});
