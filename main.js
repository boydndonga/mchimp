$(document).ready(function(){
    $("form#subby").submit(function(event){
        var emailaddr = $("input.Mail").val()

        var payload =   {
            "apikey": "13985e713e6e72b2ec8645e2134516ae",
            "id": "3",
            "email": {
              "email": emailaddr
            },
            "send_welcome": false
          };
          payload = Utilities.jsonStringify(payload); // the payload needs to be sent as a string, so we need this
          var options = {
             method: "post",
             contentType: "application/json", // contentType property was mistyped as ContentType - case matters
             payload: payload
          }; 
          var result = UrlFetchApp.fetch("https://us20.api.mailchimp.com/2.0/lists/subscribe.json", options);
        alert(emailaddr);
        event.preventdefault();
    })
});