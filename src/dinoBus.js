export const dinoName = ['Hadrosaurus'];

export function dinoNameToLetters(name){ 
  const dinoSplit = dinoName[0].toUpperCase().split('');
  return dinoSplit;

}

export function evalInput(userInputToCheck, dinoSplit)
{
  const letterMap = new Map();
  userInputToCheck = userInputToCheck.toUpperCase();

  for(let i = 0; i < dinoSplit.length; i++){
    if (dinoSplit[i] === userInputToCheck) {
      letterMap.set(userInputToCheck, true);
    } else {
      letterMap.set(userInputToCheck, true);
    }
  }

  return letterMap;
}


