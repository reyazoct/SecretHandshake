export const secretHandshake = (decimalValue) => {
    const listItem = ['wink','double blink','close your eyes','jump'];
    let binaryValue = decimalValue.toString(2);
    const getItems = (accumulator, current, curIndex) => {
        if (current === '1') accumulator.push(listItem[curIndex]);
        return accumulator;
    };
    return binaryValue.split('')
        .reverse()
        .reduce(getItems,[]);
};
