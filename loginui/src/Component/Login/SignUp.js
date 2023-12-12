import React from 'react'

function SignUp() {
  return (
    <div>   <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form> 
      <div>
      <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600">First name</label>
          <input type="text" id="username" className="mt-1 p-2 w-full border rounded" />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600">Surname</label>
          <input type="text" id="username" className="mt-1 p-2 w-full border rounded" />
        </div>
      </div>
      
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">Email</label>
          <input type="email" id="email" className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600">User Name</label>
          <input type="text" id="username" className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmpadatessword" className="block text-gray-600">Date of Birth</label>
          <input type="date" id="date" className="mt-1 p-2 w-full border rounded" />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">Password</label>
          <input type="password" id="password" className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmpassword" className="block text-gray-600">Confirm Password</label>
          <input type="password" id="confirmpassword" className="mt-1 p-2 w-full border rounded" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Sign Up</button>
      </form>
    </div>
  </div></div>
  )
}

export default SignUp