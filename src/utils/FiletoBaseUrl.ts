const fileToBaseUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      if (reader.result) resolve(reader.result.toString())
    }

    reader.onerror = (error) => {
      reject(error)
    }

    reader.readAsDataURL(file)
  })
}

export { fileToBaseUrl }
