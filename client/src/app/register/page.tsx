import Link from "next/link";

export default function RegisterPage() {
  return (
    <section className="section">
      <div className="container-xl max-w-md">
        <h1 className="text-3xl mb-2">Create your account</h1>
        <p className="text-brand-ink/70 text-sm mb-8">Book faster and keep track of your treatments.</p>
        <form className="card space-y-4">
          <div><label className="label">Full name</label><input className="input" /></div>
          <div><label className="label">Email</label><input type="email" className="input" /></div>
          <div><label className="label">Phone</label><input className="input" /></div>
          <div><label className="label">Password</label><input type="password" className="input" /></div>
          <button type="button" className="btn-primary w-full">Create account</button>
          <div className="text-center text-sm">
            Already have an account? <Link href="/login" className="text-brand-gold font-medium">Sign in</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
