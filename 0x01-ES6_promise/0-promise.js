// 1-promise.test.js
import getFullResponseFromAPI from './1-promise';

describe('getFullResponseFromAPI', () => {
    it('should resolve with success message when success is true', async () => {
        const response = await getFullResponseFromAPI(true);
        expect(response).toEqual({
            status: 200,
            body: 'Success',
        });
    });

    it('should reject with an error message when success is false', async () => {
        await expect(getFullResponseFromAPI(false)).rejects.toThrow('The fake API is not working currently');
    });
});
