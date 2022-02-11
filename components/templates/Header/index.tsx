import Image from 'next/image'

type Props = {
  children: React.ReactNode;
};

const Main = () => {

  return (
    <div className="mt-10">
      <Image
        src="/images/oqulo-logo.png"
        alt="oqulo"
        height={40}
        width={72}
        quality={100}
      />
    </div>
  );
};

export default Main;
