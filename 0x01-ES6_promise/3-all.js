// 3-all.js
import uploadPhoto from './utils.js'; // Adjust the path if necessary
import createUser from './utils.js'; // Adjust the path if necessary

function handleProfileSignup() {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    Promise.all([photoPromise, userPromise])
        .then(([photoResponse, userResponse]) => {
            console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
        })
        .catch(() => {
            console.log('Signup system offline');
        });
}

export default handleProfileSignup;
