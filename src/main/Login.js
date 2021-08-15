import Nav from './sub/LogoutNav'
import Footer from './sub/Footer'

const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="bg-purple-200">
                <Nav />
                <div className="content-wrapper">
                    <div className="text-5xl text-purple-500 font-bold text-center py-10">
                            LOGIN
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <form action="POST">
                            <label htmlFor="email" className="text-purple-500 font-bold">Email</label>
                            <br />
                            <input type="text" id="email" className="rounded-md px-2 font-sans"/>
                            <br />
                            <label htmlFor="password" className="text-purple-500 font-bold">Password</label>
                            <br />
                            <input type="password" id="password" className="rounded-md px-2 font-sans"/>
                            <br />
                            <br />
                            <button type="submit" className="bg-purple-500 rounded-md py-2 px-2 m-auto text-white font-bold w-full">Login</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Login;