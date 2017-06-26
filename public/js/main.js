$(document).ready(function() {

  // Place JavaScript code here...
  console.log('bingo');
  var el = $('.csrfContainer');

  // XMLHttpRequest cannot load. Response to preflight request doesn't pass access control check: 
  //The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' 
  // when the request's credentials mode is 'include'. Origin 'http://localhost:3000' is therefore not allowed access.
  // The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.
  // $.ajax({
  //   type: "DELETE",
  //   url: 'http://vagupt-dt:8080/tfs/DefaultCollection/_apis/Favorite/Favorites/43fdd3ef-ef9b-48c1-a141-7bc7becc476d?artifactType=Microsoft.TeamFoundation.Classification.TeamProject&artifactScopeType=Project&artifactScopeId=8573ff84-526d-4b28-aaf7-5072f7ac800a',
  //   data: null,
  //   success: function(data){console.log(data)},
  //   dataType: undefined,
  //   xhrFields: {
  //       withCredentials: true
  //   },
  //   headers: {
  //     "Origin": "visualstudio.com"
  //   }
  // });

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

  // Fails with CSRF token missing exception
  // Because of https://mseng.visualstudio.com/VSOnline/_git/VSO?path=%2FTfs%2FService%2FWebAccess%2FServer%2FTfsController.cs&version=GBmaster&_a=annotate&line=28&lineStyle=plain&lineEnd=28&lineStartColumn=5&lineEndColumn=31
  // And https://mseng.visualstudio.com/VSOnline/_git/VSO?path=%2FVssf%2FWebPlatform%2FPlatform%2FControllers%2FWebPlatformController.cs&version=GBmaster&_a=contents&line=10&lineStyle=plain&lineEnd=10&lineStartColumn=5&lineEndColumn=30
  // $.ajax({
  //   type: "POST",
  //   url: 'http://vagupt-dt:8080/tfs/DefaultCollection/_api/_wit/updateWorkItems?__v=5',
  //   data: 'updatePackage=%5B%7B%22id%22%3A1%2C%22rev%22%3A2%2C%22projectId%22%3A%228573ff84-526d-4b28-aaf7-5072f7ac800a%22%2C%22isDirty%22%3Atrue%2C%22fields%22%3A%7B%2224%22%3A%22Vaibhav+Gupta+(OSS)%22%7D%7D%2C%7B%22id%22%3A2%2C%22rev%22%3A2%2C%22projectId%22%3A%228573ff84-526d-4b28-aaf7-5072f7ac800a%22%2C%22isDirty%22%3Atrue%2C%22fields%22%3A%7B%2224%22%3A%22Vaibhav+Gupta+(OSS)%22%7D%7D%5D',
  //   success: function(data){console.log(data)},
  //   dataType: undefined,
  //   xhrFields: {
  //       withCredentials: true
  //   }
  // });
});