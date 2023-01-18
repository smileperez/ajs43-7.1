export default class Validator {
  static validateUsername(name) {
    const regular = new RegExp('^[a-zA-Z]+[a-zA-Z-_]+[0-9]{0,3}_{0,2}\\-{0,2}[a-zA-Z]+$');
    return regular.test(name);
  }
}