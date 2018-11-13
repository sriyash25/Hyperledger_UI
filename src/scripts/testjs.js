function testJS() {
    var b = document.getElementById('name').value,
        url =  '../dashboard.html?name=' + encodeURIComponent(b);

    document.location.href = url;
}