import { secretHandshake } from './secretHandshake';

describe('Secret Handshake', () => {
    test('binary 1 (decimal 1) is a wink', () => {
        expect(secretHandshake(1)).toEqual(['wink']);
    });

    test('binary 10 (decimal 2) is a double blink', () => {
        expect(secretHandshake(2)).toEqual(['double blink']);
    });

    test('binary 100 (decimal 4) is close your eyes', () => {
        expect(secretHandshake(4)).toEqual(['close your eyes']);
    });

    test('binary 1000 (decimal 8) is jump', () => {
        expect(secretHandshake(8)).toEqual(['jump']);
    });

    test('binary 11 (decimal 3) is wink and double blink', () => {
        expect(secretHandshake(3)).toEqual(['wink', 'double blink']);
    });
});
