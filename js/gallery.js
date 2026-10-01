/*Name this external file gallery.js*/

function upDate(previewPic) {
    /*
    In this function you should:
    1) change the url for the background image of the div with the id = "image"
       to the source file of the preview image
    2) Change the text of the div with the id = "image"
       to the alt text of the preview image
    */

    console.log("upDate function called!");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    /*
    In this function you should:
    1) Update the url for the background image of the div with the id = "image"
       back to the original value: url('')
    2) Change the text of the div with the id = "image"
       back to the original text: "Hover over an image below to display here."
    */

    console.log("unDo function called!");

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
