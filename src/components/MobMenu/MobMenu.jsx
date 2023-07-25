export const MobMenu = ({ onClick }) => {
  const handleClose = e => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  return (
    <div
      className="bg-black/50 fixed w-full h-screen z-10 top-0 left-0"
      onClick={handleClose}
    ></div>
  );
};
