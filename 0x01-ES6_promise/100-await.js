// 100-await.js
import uploadPhoto from './5-photo-reject';  // Adjust the import path if necessary
import createUser from './4-user-promise';    // Adjust the import path if necessary

const asyncUploadUser = async () => {
    try {
        const photoResponse = await uploadPhoto('photo.jpg');
        const userResponse = await createUser('Guillaume', 'Salva');

        return {
            photo: photoResponse,
            user: userResponse,
        };
    } catch (error) {
        return {
            photo: null,
            user: null,
        };
    }
};

export default asyncUploadUser;
