var url = "https://cv-om.herokuapp.com/db";
var links = [];

const load = links => {

    for (val of links) {
        console.log(val);
       
        $('#section-wrapper').append(
           `<div class="col-xl-6 p-4">
                <div class="ratio ratio-1x1">
                    <div class="card">
                        <div class="card-header">
                             <h1>${val.title}</h1>
                        </div>
                        <iframe src="${val.link}"  allowfullscreen></iframe>
                    </div>
                </div>
            </div>`
        )
    };

};

$(window).on("load",  async () => {
    try {
        links =  ( await axios.get(`${url}`) ).data;
        load( links.webs );
    } catch (error) {
        console.log(err)
    }
});