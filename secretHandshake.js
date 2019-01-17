export const secretHandshake = (decimalValue) => {
    if(isNaN(decimalValue))
        throw new Error('Handshake must be a number');

    let binaryValue = decimalValue.toString(2);

    let returnValue = binaryValue.split('')
        .reverse()
        .reduce(getItems, []);

    if(binaryValue.length < 5)
        return returnValue;

    returnValue.pop();
    return returnValue.reverse();
};

const listItem = ['wink', 'double blink', 'close your eyes', 'jump'];

const getItems = (accumulator, current, curIndex) => {
    if (Number(current)) accumulator.push(listItem[curIndex]);
    return accumulator;
};
