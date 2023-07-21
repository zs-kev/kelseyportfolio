import Image from 'next/image';
import BackgroundCircle from '../../../components/BackgroundCircle';
import BackgroundLines from '../../../components/BackgroundLines';

export default function Page() {
  return (
    <>
      <section className="relative max-w-screen-2xl mx-auto text-center">
        <div className="xl:px-8 px-14">
          <h1 className="font-Josefin text-6xl max-w-md mx-auto pt-28 pb-14 font-semibold">
            A look behind the drawings.
          </h1>
          <div className="relative grid md:grid-cols-3 sm:grid-cols-2 gap-[5%] justify-center z-10 max-w-5xl mx-auto py-20">
            <div className="pt-16 hidden sm:block">
              <div className="p-4 bg-white border border-tertiary rounded-2xl max-w-[295px]">
                <div className="border border-tertiary rounded-lg overflow-hidden">
                  <Image
                    src="/assets/images/kelsey-phone.png"
                    width={295}
                    height={521}
                    alt="Kelsey pointing a phone camera back"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="p-4 bg-white border border-tertiary rounded-2xl max-w-[295px]">
                <div className="border border-tertiary rounded-lg overflow-hidden">
                  <Image
                    src="/assets/images/kelsey.png"
                    width={295}
                    height={521}
                    alt="Kelsey pointing a phone camera back"
                  />
                </div>
              </div>
            </div>
            <div className="pt-16 hidden md:block">
              <div className="p-4 bg-white border border-tertiary rounded-2xl max-w-[295px]">
                <div className="border border-tertiary rounded-lg overflow-hidden">
                  <Image
                    src="/assets/images/kelsey-look.png"
                    width={295}
                    height={521}
                    alt="Kelsey pointing a phone camera back"
                  />
                </div>
              </div>
            </div>
            <BackgroundCircle />
          </div>
        </div>
        <BackgroundLines numberOfLines={11} />
      </section>
      <section className="relative max-w-screen-2xl mx-auto pt-20 pb-28">
        <div className="max-w-5xl mx-auto xl:px-8 px-14">
          <h2 className="font-Josefin text-5xl font-semibold pb-10">
            About Me
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            sagittis condimentum placerat. Ut ligula dolor, dignissim in
            vehicula nec, fringilla quis nisi. Phasellus viverra odio arcu,
            vitae finibus felis elementum.
          </p>
          <p className="text-xl py-6">
            Duis tristique sem non dui facilisis, ut commodo enim porttitor.
            Fusce pellentesque sem nec ligula malesuada dictum. Integer vehicula
            bibendum maximus. In blandit, augue ut gravida interdum, ipsum lacus
            auctor quam, sed lacinia nisi elit non elit. In blandit in sem a
            luctus. Nullam ut nunc et mi scelerisque ullamcorper et in nulla.
            Quisque non accumsan urna, eget gravida eros. Vestibulum vitae
            convallis diam.
          </p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            sagittis condimentum placerat. Ut ligula dolor, dignissim in
            vehicula nec, fringilla quis nisi. Phasellus viverra odio arcu,
            vitae finibus felis elementum.
          </p>
        </div>
        <BackgroundLines numberOfLines={11} />
      </section>
    </>
  );
}
