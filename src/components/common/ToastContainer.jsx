import React from 'react';
import Toast from './Toast';

const ToastContainer = ({ toasts, onToastClose }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          style={{ transform: `translateY(${index * 10}px)` }}
        >
          <Toast
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => onToastClose(toast.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;