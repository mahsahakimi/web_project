function myFunction() {
    let myLinksElement = document.getElementById("myLinks");
    if (myLinksElement.style.display === "none") {
        myLinksElement.style.display = "block";
    } else {
        myLinksElement.style.display = "none";
    }
}