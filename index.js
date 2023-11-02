let imgurl;
function uploadfile(){
    const inputf = document.getElementById('file');
    const image =inputf.files[0];

    const formData = new FormData();
    formData.append('image_file', image);
    formData.append('size', 'auto');

    const apiKey = 'ozvGtKnjp8htbkhkPRmeXTPz';

    fetch('https://api.remove.bg/v1.0/removebg',{
        method:'POST',
        headers: {
        'X-Api-Key': apiKey
    },
    body: formData
    })
    .then(function(reponse){
            return reponse.blob();
    })
    .then(function(blob){
            const url = URL.createObjectURL(blob);
            const img = document.createElement('img');
            imgurl=url;
            img.src = url;
            // console.log(img.src);
            // console.log(imgurl);
            document.body.appendChild(img);
    })
    .catch();
    console.log("clicked");
}

console.log(imgurl);
function downloadFile(){
    var aelement = document.createElement('a'); //<a></a>
        aelement.href = imgurl;
        aelement.download = 'abc.png';
        console.log(aelement.download);
        document.body.appendChild(aelement);

        aelement.click();

        document.body.removeChild(aelement);
   }