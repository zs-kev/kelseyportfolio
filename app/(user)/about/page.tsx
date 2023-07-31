import Image from 'next/image';
import BackgroundCircle from '../../../components/BackgroundCircle';
import BackgroundLines from '../../../components/BackgroundLines';

export default function Page() {
  return (
    <>
      <section className="text-center">
        <div className="wrapper">
          <h1 className="max-w-md mx-auto pb-14">
            A look behind the drawings.
          </h1>
          <div className="relative grid md:grid-cols-3 sm:grid-cols-2 gap-[5%] justify-center z-10 max-w-5xl mx-auto lg:py-20 py-0">
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
            <div className="absolute left-2/4 -translate-x-2/4 z-[-1] top-0 lg:w-[850px] lg:h-[850px] md:w-[650px] md:h-[650px] sm:w-[600px] sm:h-[600px] w-[350px] h-[350px]">
              <BackgroundCircle />
            </div>
          </div>
        </div>
        <BackgroundLines numberOfLines={11} />
      </section>
      <section>
        <div className="max-w-5xl mx-auto wrapper">
          <h2 className="font-Josefin sm:text-4xl md:text-5xl text-3xl font-semibold md:pb-10 pb-6 ">
            About Me
          </h2>
          <p>
            As a passionate children&apos;s book illustrator with a background
            in the television industry, I am adept at exploring diverse
            concepts, crafting captivating narratives, and channeling my
            creativity into projects that ignite the imaginations of young
            audiences.
          </p>
          <p className="md:pt-6 pt-5">
            Now, I bring my creative storytelling skills to the world of
            children&apos;s literature. My journey as an illustrator began with
            a deep love for bringing characters and stories to life. Through
            vibrant colors, expressive compositions, and attention to detail, I
            strive to captivate young readers and ignite their imaginations. I
            believe that a well-illustrated book can transport children to
            magical worlds and make learning an enchanting experience.
          </p>
          <p className="md:py-6 py-5">
            Collaboration is at the heart of my process, and I value open
            communication with authors, publishers, and fellow creatives. I
            believe that understanding the essence of a story is crucial to
            bringing its vision to life. I am committed to working closely with
            clients, taking their ideas and turning them into visually stunning
            illustrations that resonate with both children and adults alike.
          </p>
          <p>
            Whether you&apos;re a children&apos;s book author in need of an
            illustrator, a publisher seeking fresh talent, or a creative
            professional looking to collaborate, I am excited to be a part of
            your project. Let&apos;s embark on this artistic journey together
            and create something truly special!
          </p>
        </div>
        <BackgroundLines numberOfLines={11} />
      </section>
    </>
  );
}
