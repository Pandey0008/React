function costumRender(reactElement,mainContainer){


    /*const domElement=document.createElement(reactElement.type )
    domElement.innerHTML=reactElement.Children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    mainContainer.appendChild(domElement)*/
    
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.Children
    for (const prop in reactElement.props) {
       if(prop==='Children')continue;
       domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const reactElement={
    type:"a",
    props:{
        href:"http://www.google.com",
        target:"_blank"
    },
    Children:"Click me to visit Google"
}

const mainContainer=document.querySelector('#root')
 
costumRender(reactElement,mainContainer)

// 1)Ek container lo usme #root element ko query karke utha lo.
//(const mainContainer=document.querySelector('#root'))

//2) element ko banayege object form me
//const reactElement={
   // type:"a",
    //props:{
      //  href:"http://www.google.com",
     //   target:"_blank"
 //   },
   // Children:"Click me to visit Google"
  //}

  // 3)Ek render method banayege joki elements le aur container me inject kar de.
//(costumRender(reactElement,mainContainer))

//4)Fir render Function banayege
/*function costumRender(reactElement,mainContainer){

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.Children
    for (const prop in reactElement.props) {
       if(prop==='Children')continue;
       domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}*/