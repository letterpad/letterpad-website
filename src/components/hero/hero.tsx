import Image from "next/image";

import ButtonLink from "@/components/links/ButtonLink";

const Hero = () => {
  return (
    <section className='bg-white'>
      <div className='container flex flex-col items-center mx-auto my-12 md:flex-row md:my-24'>
        {/* <!--Left Col--> */}
        <div className='flex flex-col items-start justify-center pb-24 pt-12 px-4 w-full lg:w-1/2'>
          <p className='tracking-loose uppercase'></p>
          <h1 className='font-bold my-4 text-3xl'>
            Letterpad is a blog publishing platform.
          </h1>
          <p className='leading-normal mb-4'>
            Letterpad has a minimal footprint in terms of features and are best
            suited for personal blogs.
          </p>
          <p className='flex gap-2'>
            <ButtonLink
              className='mt-6'
              href='/demo'
              variant='outline'
              target='_blank'
            >
              Demo
            </ButtonLink>
            <ButtonLink
              className='mt-6'
              href='/admin/register'
              variant='dark'
              target='_blank'
            >
              Register
            </ButtonLink>
          </p>
        </div>
        {/* <!--Right Col--> */}
        <div className='text-center w-full lg:py-6 lg:w-1/2'>
          <Image
            src='/images/hero.jpg'
            alt='Demo Image'
            width={800}
            height={520}
            objectFit='contain'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
