TrackJS.track('Testing TrackJS!');

// Console Log
errorBtns[0].addEventListener('click', () => {
	console.log('Console Log Demo');
})
  
// Console Error
errorBtns[1].addEventListener('click', () => {
	console.error('Console Error Demo');
})
  
// Console Count
errorBtns[2].addEventListener('click', () => {
	console.count('Count button: ');
})
  
// Console Warn
errorBtns[3].addEventListener('click', () => {
	console.warn('Console Warn Demo');
})
  
// Console Assert
errorBtns[4].addEventListener('click', () => {
	const number = 2;
	const errorMsg = "The number does not equal 3";
	console.assert(number === 3, "%o", { number, errorMsg });
})
  
// Console Clear
	errorBtns[5].addEventListener('click', () => {
	console.clear();
})
  
// Console Dir
errorBtns[6].addEventListener('click', () => {
	console.dir(errorBtns[6]);
})
  
// Console dirxml
errorBtns[7].addEventListener('click', () => {
	console.dirxml(errorBtns[7]);
})
  
// Console Group Start
errorBtns[8].addEventListener('click', () => {
	console.group();
})
  
// Console Group End
errorBtns[9].addEventListener('click', () => {
	console.groupEnd();
})
  
// Console table
errorBtns[10].addEventListener('click', () => {
	const course1 = {name:"CSE", num:"110"}
	const course2 = {name:"CSE", num:"130"}
	const course3 = {name:"CSE", num:"112"}
  
	console.table([course1, course2, course3]);
})
  
// Start Timer
errorBtns[11].addEventListener('click', () => {
	console.time("Timer button");
})
  
// End Timer
errorBtns[12].addEventListener('click', () => {
	console.timeEnd("Timer button");
})
  
// Console Trace
errorBtns[13].addEventListener('click', () => {
	console.trace();
})
  
// Trigger a global error
errorBtns[14].addEventListener('click', () => {
	throw new Error("trigger a global error");
})
  
window.onerror = (event, source, lineno, colno, error) => {
	console.log("OHHHH nooooo, an error happened")
};