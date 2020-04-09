replaceText(document.body)

function replaceText(element)
{
  if(element.hasChildNodes())
  {
    element.childNodes.forEach(replaceText)
  }
  else if(element.nodeType === Text.TEXT_NODE)
  {
    if(element.textContent.match(/coronavirus/gi))
    {
      //for only removing coronavirus word
      const newElement =document.createElement('span')
      newElement.innerHTML=element.textContent.replace(/(coronavirus)/gi,
      '<span style="background-color: black; color: black;">$1</span>')
      element.replaceWith(newElement)

      //for removing complete paragraph containing word coronavirus
      //element.parentElement.remove()
    }
  }
}
