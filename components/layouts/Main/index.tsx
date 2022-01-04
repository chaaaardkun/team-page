type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {

  return (
    <div className="container mx-auto h-full max-w-7xl pl-[1.5rem] pr-[1.5rem] xl:pl-0 xl:pr-0">
      {children}
    </div>
  );
};

export default Main;
