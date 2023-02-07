import { TestScheduler } from "jest";
import { dinoName, dinoNameToLetters } from "../src/dinoBus";


describe('Dino', () => {

  test('splitting dino names to letters', () => {
    let dinoArray = dinoNameToLetters();
    expect(dinoArray[2]).toEqual('D');




  });
});