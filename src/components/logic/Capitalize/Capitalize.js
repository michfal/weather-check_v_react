function Capitalize(string) {
    const separatedWords = string.split(" ")
    const upperCaseArray = separatedWords.map((e) => {
        return e.charAt(0).toUpperCase() + e.slice(1)
    })
    
     const upperCaseString =  upperCaseArray.join(" ")
    return upperCaseString
}

export default Capitalize;