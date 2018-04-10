
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
              var urlToImg = data.articles[i].urlToImage;

              var $author = $('<div class="author">Author: ' + author + "</div >");
              var $title = $(
                "<a href=" + artUrl + '><div class="title">' + title + "</div ></a>"
              );
              var $description = $(
                "<a href=" +
                  artUrl +
                  '><div class="description">' +
                  description +
                  "</div ></a>"
              );
              var $description = $(
                "<a href=" +
                  artUrl +
                  '><div class="description">' +
                  description +
                  "</div ></a>"
              );
              var $urlToImg = $(
                "<a href=" +
                  artUrl +
                  '><div class="urlToImg">' +
                  urlToImg +
                  "</div ></a>"
              );

              $("#test").append($author, $title, $description);
              console.log(artUrl);
            }
          }
