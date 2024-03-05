/*
 * will then calculate the length, so that the result
 *is exactly 1 board foot and returns that value. 
 *
 * @author  Evgeny Vovk 
 * @version 1.0
 * @since   2024-03-01
 */

import { createPrompt } from 'bun-promptx'

function boardFoot(boardWidthFloat, boardHeightFloat) {
  // this function calculates the length of a boardFoot
  const boardFoot = 144
  const boardLength = boardFoot / (boardWidthFloat * boardHeightFloat)

  return boardLength
}

// input
const boardWidth = createPrompt("Enter the width(inches): ")
const boardWidthFloat = parseFloat(boardWidth.value || "-1")
const boardHeight = createPrompt("Enter the height(inches): ")
const boardHeightFloat = parseFloat(boardHeight.value || "-1")

// error check
let validInput = true 
if (isNaN(boardWidthFloat) == true || boardWidthFloat < 0) {
  console.log("Invalid input.")
  validInput = false
} else if (isNaN(boardHeightFloat) == true || boardHeightFloat < 0) {
  console.log("Invalid input.")
  validInput = false
} else {
  // process
  let boardLength = boardFoot(boardWidthFloat, boardHeightFloat)
  // output
  console.log(`The wood should be ${boardLength} inch(es) long.`)
}

console.log("\nDone.")

