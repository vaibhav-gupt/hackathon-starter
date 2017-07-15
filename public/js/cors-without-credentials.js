$(document).ready(function() {
    var data = {
      artifactId: artifactId,
      artifactName: projectName,
      artifactScope: {
        type: "Project",
        id: artifactId,
        name: projectName,
      },
      artifactType: "Microsoft.TeamFoundation.Classification.TeamProject",
    }

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