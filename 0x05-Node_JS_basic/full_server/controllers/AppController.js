/**
 * Contains the miscellaneous route handlers.
 * @author Gladys Mwangi <https://github.com/wawi-m>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
