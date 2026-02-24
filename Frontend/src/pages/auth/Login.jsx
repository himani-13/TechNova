export default function Login() {
  return (
    <div className="page">
      <h1>Login</h1>

      <form className="form">
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}