// next 中不需要引入 React
const TestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-rose-500 h-full">
      <div>this is a navbar</div>
      <hr />
      {children}
    </div>
  );
};

export default TestLayout;
