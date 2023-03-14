let list: Array<string> = []

list.push("Ostap")

list.push("Taras")

list.push("Sergii")

console.log(list)

function transformToLastCharacterUpperCaseVersionOne(elements: string[]): string[] {
    const resultList: string[] = [];
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const firstCharacters = element.substring(0, element.length - 1);
      const lastCharacter = element.substring(element.length - 1).toUpperCase();
      resultList.push(firstCharacters.concat(lastCharacter));
    }
    return resultList;
  }
  

  console.log("After transformation 1")
  console.log(transformToLastCharacterUpperCaseVersionOne(list))

  

  function transformToLastCharacterUpperCaseVersionTwo(elements: string[]): string[] {
    const resultList: string[] = [];
    for (const element of elements) {
      const firstCharacters = element.substring(0, element.length - 1);
      const lastCharacter = element.substring(element.length - 1).toUpperCase();
      resultList.push(firstCharacters.concat(lastCharacter));
    }
    return resultList;
  }
  
  console.log("After transformation 2")
  console.log(transformToLastCharacterUpperCaseVersionTwo(list))

  function transformToLastCharacterUpperCaseVersionThree(elements: string[]): string[] {
    return elements
      .filter(element => element.length === 5)
      .map(element => {
        const firstCharacters = element.substring(0, element.length - 1);
        const lastCharacter = element.substring(element.length - 1).toUpperCase();
        return firstCharacters.concat(lastCharacter);
      });
  }
  
  
  console.log("After transformation 3")
  console.log(transformToLastCharacterUpperCaseVersionThree(list))
  

  //TODO: make function to convert camelCase string to lowercase-underscore
  function convertCamelCaseToUnderscore(input: string): string {
    // implementation goes here
    return "";
  }
  