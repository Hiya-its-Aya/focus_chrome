
$(document).ready(function() {
    const contents = $('#contents');
    const contentsParent = contents.parent();
    contents.remove();
    const image = new Image();
    image.src = "https://i.kym-cdn.com/entries/icons/original/000/017/618/pepefroggie.jpg"
    const text = `<div class = "beautText"> Pepe is watching ... </div>`
    contentsParent.append(text, image);
});