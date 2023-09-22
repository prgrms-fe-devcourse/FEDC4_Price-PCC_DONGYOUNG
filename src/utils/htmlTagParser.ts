type HTMLTagParserType = (_htmlString: string) => string | null

const elementsToCheck = ['p', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1']

const htmlTagParser: HTMLTagParserType = (htmlString) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlString, 'text/html')

  for (const elementName of elementsToCheck) {
    const element = doc.querySelector(elementName)
    if (element) {
      return element.textContent
    }
  }

  return null
}

export default htmlTagParser
