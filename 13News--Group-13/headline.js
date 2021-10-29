	var xhttp = new XMLHttpRequest();
    const list_berita = document.getElementById('berita');
    xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                    var data=JSON.parse(xhttp.responseText);
                    data.forEach(function(berita) {
                    document.getElementById("berita").innerHTML +=
						`
                <div class="col-md-12 d-sm-flex p-3" style="display:flex">
                    <div class="col-md-5">
                        <div class="fh5co_hover_news_img">
                         <img src="${berita.urlToImage}" class="responsive-img" style="width:100%">
                        
                        </div>
                    </div>
                    <div class="col-md-7">
                        <a href="${berita.url}" class="fh5co_magna py-2">${berita.title}</a><br>
                        <p class="fh5co_mini_time"> Published on: ${berita.publishedAt}</p>
                        <div class="fh5co_consectetur"> 
                            <p>${berita.description}</p>
                            <a href="${berita.url}" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>

            `;
                      });
                        }
                    };
                    xhttp.open("GET", "data.json", true);
                    xhttp.send();
                   