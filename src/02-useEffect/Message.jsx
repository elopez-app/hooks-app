import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log('Message mounted')

    return () => {
      console.log('Message unmounted')
    };
  }, []);

  return (
    <>
      <h3>El usuario ya existe</h3>
    </>
  );
};
