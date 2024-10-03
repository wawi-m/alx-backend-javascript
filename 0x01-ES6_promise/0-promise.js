// 0-promise.js
function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate an API call with a timeout
        setTimeout(() => {
            // You can resolve with some data or reject with an error
            resolve("API response data");
        }, 1000); // Simulates a 1-second delay
    });
}

export default getResponseFromAPI;
