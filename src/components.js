const images = (url, divImg, imgClass) => {
    const img = document.createElement('img');
    const div = document.getElementById(divImg);
    img.setAttribute('src', url);
    img.setAttribute('class', imgClass);

    div.appendChild(img);
};

export {images};