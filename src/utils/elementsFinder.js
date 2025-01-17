export const LAST_TAB_INDEX = 0;

const ROOT_CONTAINER_SELECTOR = '#root > div > div';
const MODAL_CONTAINER_SELECTOR = 'div:nth-child(6)';

export const getRootContainer = () => document.querySelector(ROOT_CONTAINER_SELECTOR);
export const getModalContainer = (rootContainer) => rootContainer.querySelector(MODAL_CONTAINER_SELECTOR);

const COMPOSE_POST_SELECTOR = '[data-testid="composePostView"]';
const COMPOSE_CANCEL_BUTTON_SELECTOR = '[data-testid="composerCancelButton"]';
const COMPOSE_POST_BUTTON_SELECTOR = '[data-testid="composerPublishBtn"]';
const CONTENT_EDITABLE_SELECTOR = 'div.ProseMirror';
const LINK_BUTTON_SELECTOR = '[data-testid="addLinkCardBtn"]';
const BUTTON_ROW_SELECTOR = 'div[tabindex] > div:nth-child(3)';
const PHOTO_BUTTON_SELECTOR = `div[tabIndex='${LAST_TAB_INDEX}']`;

export const getComposePostModal = (modalContainer) => modalContainer.querySelector(COMPOSE_POST_SELECTOR);
export const getExitButton = (modal) => modal.querySelector(COMPOSE_CANCEL_BUTTON_SELECTOR);
export const getPostButton = (modal) => modal.querySelector(COMPOSE_POST_BUTTON_SELECTOR);
export const getContentEditable = (modal) => modal.querySelector(CONTENT_EDITABLE_SELECTOR);
export const getLinkButton = (modal) => modal.querySelector(LINK_BUTTON_SELECTOR);
export const getButtonRow = (modal) => modal.querySelector(BUTTON_ROW_SELECTOR);
export const getPhotoButton = (buttonRow) => buttonRow.querySelector(PHOTO_BUTTON_SELECTOR);
