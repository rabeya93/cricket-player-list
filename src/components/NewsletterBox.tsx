const NewsletterBox = () => {
    return (
        <div className="rounded-3xl border border-white/80 bg-white/15 p-4">
            <div className="rounded-2xl bg-white bg-[radial-gradient(circle_at_top_right,#FBD3A0,transparent_30%),radial-gradient(circle_at_bottom_left,#A5D8F5,transparent_30%)] px-4 py-14 text-center text-black">
                <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
                <p className="mt-3 text-gray-600">Get the latest updates and news right in your inbox!</p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className='w-full max-w-72 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none'
                    />
                    <button className="cursor-pointer rounded-xl bg-linear-to-r from-[#F472B6] to-[#FBBF24] px-6 py-3 text-sm font-bold text-black">Subscribe</button>
                </div>
            </div>
            
        </div>
    );
};

export default NewsletterBox;