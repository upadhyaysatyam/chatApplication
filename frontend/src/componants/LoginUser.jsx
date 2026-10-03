import {Link} from 'react-router-dom'
const LoginUser = ()=>{
    return (
        <div className="min-w-96 mx-auto">
            <div className="h-full w-full bg-grey-400 p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                <h1 className="text-3xl font-bold text-center text-white">
                     Login
                </h1>
                <form action="">
                    
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">
                                   Username:
                            </span>
                        </label>
                        <input 
                          className="input input-bordered w-full h-10 bg-transparent text-white placeholder:text-gray-300 focus:outline-none focus:ring-0" 
                          type="text" 
                          placeholder="username"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">
                                   Password:
                            </span>
                        </label>
                        <input 
                          className="input input-bordered w-full h-10 bg-transparent text-white placeholder:text-gray-300 focus:outline-none focus:ring-0" 
                          type="password" 
                          placeholder="password"
                        />
                    </div>
                   
                    <Link className= " flex text-center" to= "/register"> Don't have an Account ? signup
                    </Link>
                    <div className=" flex text-center justify-center">
                        <button className="btn btn-block btn-sm  bg-transparent border-white w-1/2 my-5">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginUser;