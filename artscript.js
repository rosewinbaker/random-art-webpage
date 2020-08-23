async function getRandomIdNum() {
    var theURL = "https://api.artic.edu/api/v1/artworks?limit=1";

    var settings1 = {
        "async": true,
        "crossDomain": true,
        "url": theURL,
        "method": "GET"
    }
        {
        async function generateRandomImage(newURL) {

            // use newURL (generated below to make actual random artwork API call)
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": newURL, // API request URL 
                "method": "GET"
            }

            $.ajax(settings).done(function (response) {
                console.log("Artwork ID: " + response.data[0].id)
                console.log("Is this artwork public domain?: " + response.data[0].is_public_domain)
                

                if (response.data[0].is_public_domain === true) {
                    console.log(response);

                    if (response.data[0].image_id === null) {
                        console.log("No image provided.")
                        var imageURL = "http://rosebaker.design/noimageprovided.png"
                    }
                    else {
                        var imageURL = "https://www.artic.edu/iiif/2/" + response.data[0].image_id + "/full/843,/0/default.jpg"
                    }

                var title = response.data[0].title
                var artist_display = response.data[0].artist_display
                var date_display = response.data[0].date_display
                var place_of_origin = response.data[0].place_of_origin
                var medium_display = response.data[0].medium_display
                var description = response.data[0].description
                var credit_line = response.data[0].credit_line
                var publication_history = response.data[0].publication_history
                var exhibition_history = response.data[0].exhibition_history
                var provenance_text = response.data[0].provenance_text
                var collection_status = response.data[0].collection_status
                var is_public_domain = response.data[0].is_public_domain
                var copyright_notice = response.data[0].copyright_notice
                // var category_titles = response.data[0].category_titles
                // var term_titles = response.data[0].term_titles
                // var classification_title = response.data[0].classification_title

                
                $("[id='myimage']").attr("src", imageURL);

                if (response.data[0].title === null) {
                    console.log('no title found');
                }
                else {
                    $("#arttitle").append("Title: " + title);
                }

                if (response.data[0].artist_display === null) {
                    console.log('no artist_display found');
                }
                else {
                    $("#artist_display").append("Artist: " + artist_display);
                }
                
                if (response.data[0].date_display === null) {
                    console.log('no date_display found');
                }
                else {
                    $("#date_display").append("Date: " + date_display);
                }
                
                if (response.data[0].place_of_origin === null) {
                    console.log('no place_of_origin found');
                }
                else {
                    $("#place_of_origin").append("Artist place of origin: " + place_of_origin);
                }
                
                if (response.data[0].medium_display === null) {
                    console.log('no medium_display found');
                }
                else {
                    $("#medium_display").append("Medium: " + medium_display);
                }

                if (response.data[0].description === null) {
                    console.log('no description found');
                }
                else {
                    $("#description").append("Description: " + description);
                }

                if (response.data[0].credit_line === null) {
                    console.log('no credit_line found');
                }
                else {
                    $("#credit_line").append("Credit: " + credit_line);
                }

                if (response.data[0].publication_history === null) {
                    console.log('no publication_history found');
                }
                else {
                    $("#publication_history").append("Publication History: " + publication_history);
                }
                
                if (response.data[0].exhibition_history === null) {
                    console.log('no exhibition_history found');
                }
                else {
                    $("#exhibition_history").append("Exhibition History: " + exhibition_history);
                }

                if (response.data[0].provenance_text === null) {
                    console.log('no provenance_text found');
                }
                else {
                    $("#provenance_text").append("Provenance: " + provenance_text);
                }

                if (response.data[0].collection_status === null) {
                    console.log('no collection_status found');
                }
                else {
                    $("#collection_status").append("Collection Status: " + collection_status);
                }

                if (response.data[0].copyright_notice === null) {
                    console.log('no copyright_notice found');
                }
                else {
                    $("#arttitle").append("Copyright Notice: " + copyright_notice);
                }

            }

            else {
                console.log('Image was not public domain. Reloading page.');
                location.reload();
            }

            })
        }

    // make initial API call to see how many total artworks exist, then choose a random number/artwork
    $.ajax(settings1).done(function (response) {
        console.log(response);

        var totalArt = response.pagination.total_pages
        $("#totalpages").append(totalArt);

        var randomArtNum = Math.floor(Math.random() * totalArt) + 1;
        $("#randomartnum").append(randomArtNum);
        newURL = "https://api.artic.edu/api/v1/artworks?limit=1&page=" + randomArtNum
        $("#newAPIURL").append(newURL);

        generateRandomImage(newURL)
        

    });

}
}



getRandomIdNum()
