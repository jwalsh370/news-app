
          $.ajax({
            url: 'https://newsapi.org/v2/top-headlines?' +
                      'country=us&' +
                      'apiKey=512fd1720e6548e19be72270d5ce70ae',
            method: "GET",
            error: function() {
              console.log("logged");
            },
            success: function(data) {
              processData(data);
            }
          });

          function processData(data) {
             var articleItems = [];
            for (var i = 0; i < data.articles.length; i++) {
              var author = data.articles[i].author;
              var title = data.articles[i].title;
              var description = data.articles[i].description;
              var artUrl = data.articles[i].url;
              var image = data.articles[i].urlToImage;


              var $author = $('<div class="author">Author: ' + author + "</div>");
              var $title = $(
                "<a href=" + artUrl + '><div class="title">' + title + "</div></a>"
              );
              var $description = $(
                '<div class="description">Description:' +
                  description +
                  "</div>"
              );
              var $image = $(
                  '<img class="image" src="' +
                  image + '"></>');

            }
            $(".title").append($title);
            $(".author").append($author);
            $(".description").append($description);
            $(".image").append($image);

            // $(".test").append($title,$author,$description,$image);


            console.log(image);
            console.log(title);

          }
