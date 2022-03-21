import {DATA_URL_ROOT} from './Constants';

test('dev environment', () => {
    expect(DATA_URL_ROOT).toBe('/api');
});

