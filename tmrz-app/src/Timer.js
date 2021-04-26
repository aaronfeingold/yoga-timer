export default class Timer {
  // pass in a name to initalize
  constructor(name) {
    this.name = name;
    this.time = 0;
    this.isRunning = false;
  }
}