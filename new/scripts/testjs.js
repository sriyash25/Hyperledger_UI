function testJS() {
    var b = document.getElementById('name').value,
        url =  '../new.html?name=' + encodeURIComponent(b);

    document.location.href = url;
}