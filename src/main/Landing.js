import Nav from './sub/LogoutNav'
import Footer from './sub/Footer'

const Landing = () => {
    return (
        <div className="landing-wrapper">
            <div className="bg-purple-200">
                <Nav />
                <div className="content-wrapper">
                    <div className="text-5xl text-purple-500 font-bold text-center py-10">
                        SEKELE 2.0
                    </div>
                    <div className="text-2xl text-white font-bold text-center py-10 px-10 bg-purple-400 w-3/4 m-auto rounded-md">
                        SEKELE 2.0 adalah proyek kecil dari seorang mahasiswa fasilkom yang sedang belajar tentang React JS, Tailwind, dan Express
                    </div>
                    <div className="text-3xl text-purple-500 font-bold text-center py-10">
                        Find me on :
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Landing;