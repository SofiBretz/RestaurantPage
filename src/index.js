const newElement = (elem, parent, id) => {
    const newElem = document.createElement(elem);
    const parentElem = document.getElementById(parent);
    newElem.setAttribute('id', id);
    parentElem.appendChild(newElem);
  
    return id;
  };
  newElement('h1', 'content', 'aboutHeader');
  document.getElementById('aboutHeader').innerHTML = "hello";