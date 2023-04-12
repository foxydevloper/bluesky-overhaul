import {getComposePostModal, getExitButton} from './elementsFinder';

export class ExitModalPipeline {
  constructor() {
    this.modal = null;
    this.callbacks = {};
    this.paused = false;
  }

  deploy(modalContainer) {
    if (this.modal !== null) return;

    this.modal = getComposePostModal(modalContainer);
    this.exitButton = getExitButton(this.modal);

    this.callbacks.click = this.onClick.bind(this);
    this.callbacks.keydown = this.onEscape.bind(this);
    this.callbacks.stop = this.removeEvents.bind(this);

    document.addEventListener('click', this.callbacks.click);
    document.addEventListener('keydown', this.callbacks.keydown);
    this.exitButton.addEventListener('click', this.callbacks.stop);
  }

  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
  }

  terminate() {
    if (this.modal === null) return;

    this.removeEvents();
    this.modal = this.exitButton = null;
    this.callbacks = {};
  }

  removeEvents() {
    try { document.removeEventListener('click', this.callbacks.click); } catch (e) {}
    try { document.removeEventListener('keydown', this.callbacks.keydown); } catch (e) {}
    try { this.exitButton.removeEventListener('click', this.callbacks.stop); } catch (e) {}
  }

  onClick(event) {
    if (!this.paused && this.modal && !this.modal.contains(event.target) && event.target !== this.exitButton) {
      this.removeEvents();
      this.exitButton.click();
    }
  }

  onEscape(event) {
    if (!this.paused && event.key === 'Escape') {
      this.removeEvents();
      this.exitButton.click();
    }
  }
}