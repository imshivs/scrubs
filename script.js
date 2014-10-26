SC.initialize({
    client_id: '718b10dd68233434dfb06e5610561ecb'
});

// $(document).ready(function(){
//   SC.connect(function() {
//     SC.get('/me', function(me) { 
//       alert('Hello, ' + me.username); 
//     });
//   });
// }); 
// $(document).ready(function() {
SC.get('/tracks', { genres: 'punk', streamable: true}, function(tracks) {
  $(tracks).each(function(index, track) {
    $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre + " " + track.video_url));
  });
});
 // });