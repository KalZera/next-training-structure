export default function Login() {
  return (
    <div className="flex flex-col mx-auto w-[90%] min-h-40">
      <div className="flex items-center justify-center h-full">
        <p>LOGIN PAGE</p>
        <div>
          <p>User</p>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <button className="bg-blue-500 text-white rounded-md p-2 mt-2">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
