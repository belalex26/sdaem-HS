import React, {useEffect} from "react";

export const body = document.querySelector('.body') as HTMLElement;
export const ESC_PRESS = 27;


const Modal = ({...props}) => {

  const {modalActive, onModalActive, children} = props;

  useEffect(() => {
    bodyScroll();
  });

  useEffect(() => {
    document.addEventListener(`keydown`, onClose, {passive: true});
    return () => document.removeEventListener(`keydown`, onClose);
  });

  const bodyScroll = () => {
    if (modalActive) {
      return (body.style.overflow = `hidden`);
    }
    return (body.style.overflow = `auto`);
  };

  const onClose = (evt:any) => {
    if (evt.keyCode === ESC_PRESS) {
      onModalCloseClick();
    }
  };

  const onModalCloseClick = () => {
    onModalActive(false);
    bodyScroll();
  };


  return (
    <div className={modalActive ? `modal modal--active` : `modal`} onClick={() => onModalActive(false)} role="dialog">
      <div className={modalActive ? `modal__content modal__content--active` : `modal__content`} onClick={(evt) => evt.stopPropagation()}>
        {children}
        <button className="modal__close" onClick={onModalCloseClick} aria-label="закрыть"></button>
      </div>
    </div>
  );
};


export default Modal;