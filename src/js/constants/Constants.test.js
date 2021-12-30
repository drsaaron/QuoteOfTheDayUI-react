import {DATA_URL_ROOT} from './Constants';

test('dev environment', () => {
    expect(DATA_URL_ROOT).toBe('http://localhost:' + 30000);
});

