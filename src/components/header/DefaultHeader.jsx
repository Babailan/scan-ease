export default function DefaultHeader({ children }) {
  return (
    <h1 className="text-3xl font-bold dark:text-white text-black">
      {children}
    </h1>
  );
}
