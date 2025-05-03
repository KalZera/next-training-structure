export default function Account() {
  return (
    <div className="flex flex-col mx-auto w-[90%] my-6">
      <h1 className="text-2xl font-bold">Account</h1>
      <p className="text-gray-600">
        Manage your account settings and preferences.
      </p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Profile Information</h2>
      </div>
      <div className="mt-4">
        <p>Name</p>
        <p>username</p>
        <p>password</p>
        <p>orders</p>
        <p>sended</p>
        <p>cupons</p>
      </div>
    </div>
  );
}
