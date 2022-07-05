// vertual dom - vertual dom is the replica of existing dom, original html page copy

// in react for every dom object there is a corresponding vertual dom object



var newElement = document.createElement("h2");
newElement.textContent = "hello from real dom";
document.querySelector('body').appendChild(newElement)
