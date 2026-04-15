import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="section">
      <div className="container-xl max-w-md">
        <h1 className="text-3xl mb-2">Welcome back</h1>
        <p className="text-brand-ink/70 text-sm mb-8">Sign in to manage your bookings.</p>
        <form className="card space-y-4">
          <div><label className="label">Email</label><input type="email" className="input" /></div>
          <div><label className="label">Password</label><input type="password" className="input" /></div>
          <button type="button" className="btn-primary w-full">Sign in</button>
          <div className="text-center text-xs text-brand-ink/60">
            <Link href="/forgot" className="hover:text-brand-gold">Forgot password?</Link>
          </div>
          <div className="text-center text-sm">
            New here? <Link href="/register" className="text-brand-gold font-medium">Create an account</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
