async function getBerita() {
    try {
        const response = await fetch("https://newsapi.org/v2/top-headlines?results=2&country=id&apiKey=2cd5eb29c0c84df4819a1e5e61ecae5b", {
        method: "GET",
        });
        const jsonUserData = await response.json();
        // console.log(jsonUserData);
        return jsonUserData;
    } catch (error) {
        console.log(error);
    }
    }
    // getBerita();

    async function renderUsers() {
    let data = await getBerita();
    console.log(data);
    let dataUser = data.articles;
    console.log(dataUser);
    let html = "";
    Array.from(dataUser).forEach((data) => {
        let htmlRender = `
    <div class="item px-2">
        <div class="fh5co_hover_news_img">
            <div class="fh5co_news_img">
                <a href="${data.urlToImage}">
                <img src = "${data.urlToImage}"></a>
            </div>
        <div>
            <a href="${data.url}" class="d-block fh5co_small_post_heading"><span class="">${data.title}</span></a>
            <div class="c_g"><i class="fa fa-clock-o"></i> ${data.publishedAt}</div>
        </div>
        </div>
    </div>
        `;
        html += htmlRender;
    });
    

    let trending = document.querySelector(".trending");
    for (let i=0; i<=5;i++){
        trending.innerHTML = html;
    }
    
}

renderUsers();