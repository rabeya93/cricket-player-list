import banner from "../assets/banner-main.png";
import bannerBg from "../assets/bg-shadow.png"

const Banner = () => {
    return (
        <section 
        className="mx-auto max-w-300 flex flex-col items-center rounded-3xl bg-[#131313] bg-cover px-4 py-20 text-center mt-8"
        style={{ backgroundImage: `url(${bannerBg})` }}
        >
            <img src={banner} alt="Banner" className="mb-6 w-60" />
            <h1 className="mb-4 text-2xl font-bold text-white md:text-4xl">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="mb-6 text-lg text-white/70">Beyond Boundaries Beyond Limits</p>
            <button className="rounded-lg border border-[#E7FE29]  p-1">
                <span className=" block cursor-pointer rounded-lg bg-[#E7FE29] px-5 py-3 text-sm font-semibold text-black shadow-md hover:brightness-95">
                    Claim Free Credit
                </span>
            </button>  
        </section>
    );
};

export default Banner;

