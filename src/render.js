const render = () => {
    const main = document.getElementById('main');
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }
};

export default render;