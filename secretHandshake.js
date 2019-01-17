export const secretHandshake = (decimalValue) => {
    const listItem = ['wink', 'double blink', 'close your eyes', 'jump'];
    let binaryValue = decimalValue.toString(2);

    const getItems = (accumulator, current, curIndex) => {
        if (current === '1') accumulator.push(listItem[curIndex]);
        return accumulator;
    };
    let returnValue = binaryValue.split('')
        .reverse()
        .reduce(getItems, []);
    
    if(binaryValue.length < 5)
        return returnValue;
    returnValue.pop();
    return returnValue.reverse();
};
