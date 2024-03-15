const Header = () => {
    return (
        <div className="my-16 font_lexend">
            <div className="bg-[url('https://www.inspiredtaste.net/wp-content/uploads/2022/11/Fluffy-Pancakes-Recipe-Video.jpg')] bg-no-repeat min-h-screen rounded-3xl">
                <div className="py-44 text-center">
                    <h1 className="text-white font-bold text-5xl mb-6">Discover an exceptional cooking <br /> class tailored for you!</h1>
                    <p className="text-white font-normal mb-10">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
                    <div className="flex gap-7 justify-center">
                        <a className="btn text-xl font-medium rounded-full text-[#150B2B] bg-[#0BE58A] border-none">Explore Now</a>
                        <a className="btn btn-outline text-xl font-medium rounded-full bg-none text-white border-2 border-white">Our Feedback</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;