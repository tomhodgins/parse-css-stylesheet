export default function(string='') {
  const iframe = document.createElement('iframe')
  document.head.appendChild(iframe)
  const style = iframe.contentDocument.createElement('style')
  style.textContent = string
  iframe.contentDocument.head.appendChild(style)
  const stylesheet = iframe.contentDocument.styleSheets[0]
  iframe.remove()
  return stylesheet
}