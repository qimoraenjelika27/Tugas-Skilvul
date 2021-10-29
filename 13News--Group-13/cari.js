

$(document).ready(function(){
    
    $("#searchbtn").on("click",function(e){
      e.preventDefault();
      
      let query = $("#searchquery").val();
      let url = "https://newsapi.org/v2/everything?q="+query+"&sortBy=popularity&apiKey=2cd5eb29c0c84df4819a1e5e61ecae5b";

      console.log(url);
      if(query)
      if(query !== ""){
        
        $.ajax({
          
          url: url,
          method: "GET",
          dataType: "json",
          

          success: function(news){
            let output = "";
            let berita = news.articles;

            for(var i in berita){
                       output +=`
                <div class="col-md-12 p-3" style="display:flex">
                    <div class="col-md-5">
                        <div class="fh5co_hover_news_img">
                         <img src="${berita[i].urlToImage}" class="responsive-img" style="width:100%">
                        
                        </div>
                    </div>
                    <div class="col-md-7">
                        <a href="${berita[i].url}" class="fh5co_magna py-2">${berita[i].title}</a><br>
                        <a href="#" class="fh5co_mini_time py-3"> Published on: ${berita[i].publishedAt}</a>
                        <div class="fh5co_consectetur"> 
                            <p>${berita[i].description}</p><br>
                            <p>${berita[i].content}</p>
                            <a href="${berita[i].url}" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>

            `;
            }
            if(output !== ""){
              $("#newsResults").html(output);
            }else{
              let noNews = `<div style='text-align:center; font-size:36px; margin-top:40px;'>This news isn't available. Sorry about that.<br>Try searching for something else </div>`;
                $("#newsResults").html(noNews);
            }
          },

          error: function(){
            console.log("error");
          }
        });
      }else{
        console.log("please enter a word")
      }
    
      });      
    });   

