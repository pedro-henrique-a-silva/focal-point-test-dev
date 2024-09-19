import React from 'react'
import style from '@/styles/modal.module.scss'
import { useRouter } from 'next/navigation';

function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation(); 
  };

  return (
    <div className={style.modalBackdrop} onClick={handleOverlayClick}>
      <dialog className={style.modal} onClose={onDismiss}>
        {children}
      </dialog>
    </div>
  )
}

export default Modal