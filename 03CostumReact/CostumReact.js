function customRender(reactElement, mainContainer) {
    // Create the DOM element of the type specified in the reactElement
    const domElement = document.createElement(reactElement.type);
  
    // If 'children' exists and is not just a string, handle it as inner HTML or nested elements
    if (reactElement.children) {
      // Check if children is a string or a React element (for simplicity, assuming just one level of nesting)
      if (typeof reactElement.children === 'string') {
        domElement.innerHTML = reactElement.children;  // If it's a string, directly set as innerHTML
      } else {
        // If the children is a React element (an object with type and props), call customRender recursively
        customRender(reactElement.children, domElement); // Render the nested child into the domElement
      }
    }
  
    // Set all the properties (excluding 'children') as attributes
    for (const prop in reactElement.props) {
      if (prop === 'children') continue;  // Skip the 'children' property
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  
    // Append the created DOM element to the main container
    mainContainer.appendChild(domElement);
  }
  
  const reactElement = {
    type: "a",  // Element type: <a>
    props: {
      href: "http://www.google.com",  // The 'href' attribute
      target: "_blank"  // The 'target' attribute
    },
    children: "Click me to visit Google"  // The content (text) of the anchor element
  };
  
  const mainContainer = document.querySelector('#root');  // Select the container
  
  // Call the customRender function to inject the element into the DOM
  customRender(reactElement, mainContainer);
  


 /* 1)Ek container lo usme #root element ko query karke utha lo.
(const mainContainer=document.querySelector('#root'))

2) element ko banayege object form me
const reactElement={
   type:"a",
    props:{
       href:"http://www.google.com",
       target:"_blank"
   },
   Children:"Click me to visit Google"
  }

  3)Ek render method banayege joki elements le aur container me inject kar de.
(costumRender(reactElement,mainContainer))

4)Fir render Function banayege*/
