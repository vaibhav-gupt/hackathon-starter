$(document).ready(function() {
    var artifactId = "e436e95b-a029-4edf-a27e-8de65c279cad";
    var artifactName = "OrgSearch";
    var data = {
      artifactId: artifactId,
      artifactName: artifactName,
      artifactScope: {
        type: "Project",
        id: artifactId,
        name: artifactName,
      },
      artifactType: "Microsoft.TeamFoundation.Classification.TeamProject",
    }

    var accountName = "test";
    var favoritesRoute = 'https://{accountName}.me.tfsallin.net:444/_apis/Favorite/Favorites';

    $.ajax({
        type: "POST",
        url: favoritesRoute.replace(/{accountName}/, accountName),
        data: JSON.stringify(data),
        dataType: "json",
        success: function(data) {$('.csrfContainer').html(data);},
        contentType: 'application/json',
        headers: {
            Accept: "application/json; api-version=3.2-preview.1"
        }
    });
});