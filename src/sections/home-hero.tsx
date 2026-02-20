import Image from "next/image";
import { AnimatedButton } from "@/components/animated-button";
import { routes } from "@/lib/routes";

export default function HomeHero() {
  return (
    <section className="h-full xl:h-screen mb-25 w-full lg:mb-30 xl:grid xl:grid-cols-[35%_65%] 2xl:grid-cols-[42%_58%] bg-white selection:bg-[var(--primary-color)] selection:text-white">
      {/* Left: Hero Image */}
      <div className="relative hidden xl:block">
        <Image
          src="/images/hero-image.png"
          alt="Hero Image"
          width={833}
          height={899}
          className="object-cover h-full w-full object-[60%_100%]"
          priority
        />
      </div>

      {/* Right: Hero Content */}
      <div className="pt-20 md:max-xl:pt-22 flex xl:justify-center">
        <div className="w-full lg:max-xl:max-w-3/4 flex flex-col justify-center px-3 md:px-18 xl:max-w-[95%] pt-12.5 lg:pt-15  xl:pt-16 xl:pb-18 2xl:py-0  border-t border-t-black/10">
          <h1 className="text-[38px] sm:text-5xl md:text-[55px] mb-4 md:mb-5 lg:text-[58px] lg:mb-6 xl:text-[62px] 2xl:text-[75px] xl:mb-7 font-bold leading-tight w-full max-w-[715px]">
            Leading The Way <span className="text-gray-400 font-semibold">Shaping The Future Of Construction</span>
          </h1>
          <p className="2xl:text-lg text-gray-600 relative md:pl-4 mb-6 md:mb-9 xl:mb-10 2xl:mb-15 before:hidden md:before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-0.5 before:h-full before:bg-black/30 ">
            Ahmad Group is Pakistan’s leading name in construction, precast, and building innovation. As the parent of Ahmad Construction, Ahmad Precast, A.M Builders, and Ahmad Tiles & Rice, we deliver excellence, durability, and trust — shaping a stronger, modern, and sustainable future.
          </p>

          <div className="mt-8 flex max-sm:flex-col sm:items-center gap-5" >
            <AnimatedButton href={routes.about} bgColor="var(--primary-color)" hoverBgColor="var(--secondary-color)" borderColor="var(--primary-color)" hoverBorderColor="var(--secondary-color)">
              ABOUT US MORE
            </AnimatedButton>
            <div className="flex items-center gap-4">
              <svg className="fill-[var(--primary-color)]/20 hidden md:block" width="52" height="8" viewBox="0 0 52 8" xmlns="http://www.w3.org/2000/svg"><path d="M0.333333 4C0.333333 5.47276 1.52724 6.66667 3 6.66667C4.47276 6.66667 5.66667 5.47276 5.66667 4C5.66667 2.52724 4.47276 1.33333 3 1.33333C1.52724 1.33333 0.333333 2.52724 0.333333 4ZM51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM3 4.5H51V3.5H3V4.5Z"></path></svg>

              {/* Social icons */}
              <div className="flex items-center gap-4">
                <ul className="flex items-center [&>*]:size-10 [&>*]:sm:size-12 [&>*]:border-[#00000033] [&>*]:border [&>*]:bg-white [&>*]:rounded-full [&>*]:p-3 [&>*]:shrink-0 [&>*]:grid [&>*]:place-content-center [&>*]:hover:fill-white [&>*]:transition-all [&>*]:duration-200 [&>*]:hover:z-20 [&>*]:hover:scale-110 [&>*]:hover:cursor-pointer">
                  <li className="group hover:bg-black" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
                    <svg className="size-5 sm:h-6 transition-all duration-100" width="800" height="800" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>tiktok</title><path d="M16.656 1.029c1.637-.025 3.262-.012 4.886-.025a7.76 7.76 0 0 0 2.189 5.213l-.002-.002A8.77 8.77 0 0 0 29 8.45l.028.002v5.036a13.3 13.3 0 0 1-5.331-1.247l.082.034a15.4 15.4 0 0 1-2.077-1.196l.052.034c-.012 3.649.012 7.298-.025 10.934a9.5 9.5 0 0 1-1.707 4.954l.02-.031c-1.652 2.366-4.328 3.919-7.371 4.011h-.014a9.07 9.07 0 0 1-5.139-1.31l.04.023C5.05 28.185 3.32 25.603 3 22.6l-.004-.041a23 23 0 0 1-.012-1.862c.49-4.779 4.494-8.476 9.361-8.476q.822.001 1.604.136l-.056-.008c.025 1.849-.05 3.699-.05 5.548a4.29 4.29 0 0 0-5.465 2.619l-.009.03c-.133.427-.21.918-.21 1.426q0 .31.037.61l-.002-.024a4.26 4.26 0 0 0 4.382 3.586h-.009a4.2 4.2 0 0 0 3.451-1.994l.01-.018c.267-.372.45-.822.511-1.311l.001-.014c.125-2.237.075-4.461.087-6.698.012-5.036-.012-10.06.025-15.083z"/></svg>
                  </li>
                  <li className="group hover:bg-[#0765FE] -ml-2" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
                    <svg className="group-hover:fill-white size-5 sm:h-6 transition-all duration-100" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg>
                  </li>
                  <li className="group hover:bg-[#F600A6] -ml-2" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
                    <svg className="group-hover:fill-white size-5 sm:h-6 transition-all duration-100" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>
                  </li>
                  <li className="group hover:bg-[#0965C1] -ml-2" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
                    <svg className="group-hover:fill-white size-5 sm:h-6 transition-all duration-100" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 93.06 93.06" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M11.185,0.08C5.004,0.08,0.001,5.092,0,11.259c0,6.173,5.003,11.184,11.186,11.184c6.166,0,11.176-5.011,11.176-11.184 C22.362,5.091,17.351,0.08,11.185,0.08z"></path> <rect x="1.538" y="30.926" width="19.287" height="62.054"></rect> <path d="M69.925,29.383c-9.382,0-15.673,5.144-18.248,10.022h-0.258v-8.479H32.921H32.92v62.053h19.27V62.281 c0-8.093,1.541-15.932,11.575-15.932c9.89,0,10.022,9.256,10.022,16.451v30.178H93.06V58.942 C93.06,42.235,89.455,29.383,69.925,29.383z"></path> </g> </g> </g></svg>
                  </li>
                </ul>
                <span className="font-medium text-[13px] leading-[1] uppercase underline cursor-pointer">1K Followers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}