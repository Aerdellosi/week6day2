import { TestScheduler } from "jest";
import { dinoName, dinoNameToLetters, evalInput } from "../src/dinoBus";


describe('Dino', () => {

  test('splitting dino names to letters', () => {
    let dinoArray = dinoNameToLetters();
    expect(dinoArray[2]).toEqual('D');
  });
  test('userinput', () => {
    let dinoArray = dinoNameToLetters();
    const leeter = "a";
    let returnedMap = evalInput(leeter, dinoArray);
    for (const key of returnedMap.keys()) {
      if (key === leeter) {
        return true;
      }
    }
  })




});