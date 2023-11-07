function fetchfunction(){
//     var req= new XMLHttpRequest();
//     req.onload = function(){
//       console.log(req.response);
//       var resJSON=JSON.parse(req.response);
//       var imageUrl=resJSON.message;
//       $('#dogImage').attr('src',imageUrl);
//     };
//     req.open('get','https://dog.ceo/api/breeds/image/random',true);
//     req.send();
// }



$.get('https://dog.ceo/api/breeds/image/random',function(data){
     var imageUrl=data.message;
     $('#dogImage').attr('src',imageUrl);
}).fail(function(xhr,textStatus,errerThrown){
  console.log("Request Failed");
});
}

$('#fetchId').click(fetchfunction);
   