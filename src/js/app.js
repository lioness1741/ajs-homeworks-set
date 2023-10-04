
export default class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        if (this.members.has(character)) {
          throw new Error('This hero already exists');
        }
        this.members.add(char);
    }
    addAll(...characters) {
        characters.forEach((character) => {
          this.members.add(character);
        });
      }
      toArray() {
        return [...this.members];
      }
}