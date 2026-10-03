import {Link} from 'react-router-dom'

const RegisterUser = ()=>{
    return (
        <div className="min-w-96 mx-auto">
            <div className="h-full w-full bg-grey-400 p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                <h1 className="text-3xl font-bold text-center text-white">
                     Register User
                </h1>
                <form action="">
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">
                                   Full Name:
                            </span>
                        </label>
                        <input 
                          className="input input-bordered w-full h-10 bg-transparent text-white placeholder:text-gray-300 focus:outline-none focus:ring-0" 
                          type="text" 
                          placeholder="fullname"
                        />
                    </div>
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
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">
                                   Confirm Password:
                            </span>
                        </label>
                        <input 
                          className="input input-bordered w-full h-10 bg-transparent text-white placeholder:text-gray-300 focus:outline-none focus:ring-0" 
                          type="password" 
                          placeholder="confirm password"
                        />
                    </div>

                    <div className="flex item-center my-4 space-x-10">
                        <div className="flex item-center space-x-2">
                            <p>Male</p>
                            <input type="checkbox" defaultChecked className="checkbox" />
                        </div>
                        <div className="flex item-center space-x-2 ">
                            <p>Female</p>
                            <input type="checkbox" defaultChecked className="checkbox" />
                        </div>
                    </div>
                    <Link className= " flex text-center" to= "/login"> Already have an Account ? login
                    </Link>
                    <div className=" flex text-center justify-center">
                        <button className="btn btn-block btn-sm  bg-transparent border-white w-1/2 my-5">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterUser;
