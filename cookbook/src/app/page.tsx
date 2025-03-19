'use client'

import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  const notify = () => toast("This is a toast notification !");
  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}
