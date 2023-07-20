import Image from 'next/image';

function Logo() {
  return (
    <div className="flex items-center p-2.5">
      <Image
        src="/assets/images/kelsey-drawing.png"
        alt="Kibbled Kels Creations"
        width={36}
        height={35}
      />
      <p className="pl-2.5 text-tertiary uppercase">Kels Illustrates</p>
    </div>
  );
}

export default Logo;
