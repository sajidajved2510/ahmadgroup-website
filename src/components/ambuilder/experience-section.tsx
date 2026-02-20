import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-10 px-8 md:px-20 py-20">
      {/* Left Side - Image + Badge */}
      <div className="relative flex-1 flex justify-center gap-4">
        {/* Badge */}
        <div className="absolute -top-6 left-10 bg-[var(--primary-color)] text-white px-6  rounded-full flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold border-r border-white py-2 pr-2">5+</span>
          <span className="text-sm leading-tight font-semibold">
            Year’s Of <br /> Experience
          </span>
        </div>

        {/* Image with Mask */}
        <div className="relative w-[400px] h-[400px]">
          <Image
            src="/images/ambuilder/about-img.png" 
            alt="Industry Worker"
            fill
            className="object-cover mask-shape"
          />
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-snug">
          Redefining Industry <br /> Standards.
        </h2>

        <p className="text-gray-600 leading-relaxed border-l-2 border-orange-500 pl-4 lg:ml-20">
          We understand your needs and deliver digital marketing through unique
          selling proposition. Our team of experts is passionate about helping
          you SEO company. Choose us and experience the difference! Looking for
          something different? We challenge the status quo with innovative
          solutions and a [company culture adjective] approach. Let us show you
          how we can help you achieve desired outcome in a way you would not expect.
        </p>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="text-black font-semibold underline hover:text-orange-600"
          >
            BECOME A MEMBER
          </a>
          <span className="text-gray-400 text-2xl">↗</span>
        </div>
      </div>
    </section>
  );
}
