var keyA = document.getElementById("key");
var block = document.getElementById("skills");
keyA.addEventListener('click', function () {
    if (block.style.display === 'none' || block.style.display === 'block') {
        block.style.display = 'block';
    }
    else {
        block.style.display = 'none';
    }
});
