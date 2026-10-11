import Logo from "../assets/logo.png";
import NewsletterBox from "../components/NewsletterBox";

const Footer = () => {
    return (
        <footer className="mt-24 bg-[#06091A] text-white">
            {/* 1. the box, pulled up */}
            <div className="relative -top-24 -mb-24 mx-auto max-w-300 px-4">
                <NewsletterBox />
            </div>

            <div className="mx-auto max-w-300 px-4">
                {/* 2. logo */}
                <div className="flex justify-center">
                    <img src={Logo} alt="Logo" className="h-24 w-24" />
                </div>

                {/* 3. three columns */}
                <div className="grid gap-10 py-12 text-sm text-gray-400 md:grid-cols-3">
                    <div>
                        <h3 className="mb-3 font-semibold text-white">About Us</h3>
                        <p className="max-w-56">
                            We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-3 font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Services</a></li>
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-3 font-semibold text-white">Subscribe</h3>
                        <p className="mb-4 max-w-56">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <div className="flex overflow-hidden rounded-lg">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white px-4 py-3 text-black outline-none"
                            />
                            <button className="cursor-pointer bg-linear-to-r from-[#FBBF24] to-[#F472B6] px-5 font-bold text-black">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. copyright */}
            <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
                @2024 Your Company All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;