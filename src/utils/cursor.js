import {getCurrentCursorPosition, setCurrentCursorPosition} from './selection';

export class Cursor {
  constructor(contentEditable) {
    this.contentEditable = contentEditable;
    this.position = 0;
  }

  save() {
    this.position = getCurrentCursorPosition(this.contentEditable);
  }

  restore() {
    setCurrentCursorPosition(this.position, this.contentEditable);
    this.contentEditable.focus();
  }

  move(step) {
    this.position += step;
    if (this.position < 0) {
      this.position = 0;
    } else if (this.position > this.contentEditable.textContent.length) {
      this.position = this.contentEditable.textContent.length;
    }
  }
}
