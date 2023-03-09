const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(usrInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc}  ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operator, prevResult, opNumber, newResult){
    const logEntry = {
        operation: operator,
        prevResult: prevResult,
        number : opNumber,
        result: newResult
    };
    logEntries.push(logEntry);    
    console.log(logEntries);
}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;    
    currentResult  += enteredNumber;
    createAndWriteLog('+', initialResult, enteredNumber);
    writeToLog('add', initialResult, enteredNumber, currentResult);
    // const logEntry = {
    //     operation: 'add',
    //     prevResult: initialResult,
    //     number : enteredNumber,
    //     result: currentResult
    // };

}
function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;    
    currentResult -= enteredNumber;
    createAndWriteLog('-', initialResult, enteredNumber);
    writeToLog('subtract', initialResult, enteredNumber, currentResult);
}
function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;    
    currentResult *= enteredNumber;
    createAndWriteLog('*', initialResult, enteredNumber);
    writeToLog('multiply', initialResult, enteredNumber, currentResult);
}
function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;    
    currentResult /= enteredNumber;
    createAndWriteLog('/', initialResult, enteredNumber);
    writeToLog('divide', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
