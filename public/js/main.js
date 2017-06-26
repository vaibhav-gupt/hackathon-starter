$(document).ready(function() {

  // Place JavaScript code here...
  console.log('bingo');
  var el = $('.csrfContainer');
  $.ajax({
    // type: "POST",
    url: 'http://vagupt-dt:8080/tfs/DefaultCollection/_apis/Favorite/Favorites?artifactType=Microsoft.TeamFoundation.Classification.TeamProject&artifactId=8573ff84-526d-4b28-aaf7-5072f7ac800a&artifactScopeType=Project&artifactScopeId=8573ff84-526d-4b28-aaf7-5072f7ac800a',
    data: null,
    success: function(data){console.log(data)},
    dataType: undefined,
    xhrFields: {
        withCredentials: true
    }
  });
});