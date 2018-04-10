
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
              var published = data.articles[i].publishedAt;

              articleItems.push(data);






              var $author = $('<h4 class="author">Author: ' + author + "</h4 >");
              var $title = $(
                "<a href=" + artUrl + '><h2 class="title">' + title + "</h2></a>"
              );
              var $description = $(
                '<p class="description">' +
                  description +
                  "</p>"
              );
              var $image = $(
                  '<img class="image-fluid" src="' +
                  image + '">');
              // var $published = $(
              //   "<a href=" +
              //     artUrl +
              //     '><div class="published">' +
              //     published +
              //     "</div ></a>"
              // );

              // $(".services").append($author, $description, $image);


            }



          $.each(articleItems, function(key, data){
            console.log(articleItems);

          $(".title").append($title);
          $(".author").append($author);
          $(".description").append($description);
          $(".img").append($image);





        });

      }
