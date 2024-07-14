import { Toaster } from "sonner";

const ToastConfig = () => {
  return (
    <Toaster
      visibleToasts={1}
      position="top-right"
      richColors
      duration={2000}
      toastOptions={{ closeButton: true }}
    />
  );
};

export default ToastConfig;
