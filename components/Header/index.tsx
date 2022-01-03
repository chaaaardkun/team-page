import Image from 'next/image'

type Props = {
  children: React.ReactNode;
};

const Main = () => {

  return (
    <div className="mt-10">
      <Image
        src="/images/oqulo-logo.png"
        alt="Susette Ignacio"
        height={40}
        width={72}
        quality={100}
      />
    </div>
  );
};

export default Main;
