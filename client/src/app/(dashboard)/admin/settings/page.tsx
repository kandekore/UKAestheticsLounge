export default function AdminSettings() {
  return (
    <div>
      <h1 className="text-3xl">Settings</h1>
      <p className="mt-2 text-brand-ink/70 text-sm">Global configuration for the site and booking system.</p>

      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <div className="card space-y-4">
          <h2 className="font-serif text-xl">WhatsApp</h2>
          <div>
            <label className="label">WhatsApp number (international format)</label>
            <input className="input" placeholder="447000000000" />
            <p className="mt-1 text-xs text-brand-ink/60">Used for the floating chat button across the site.</p>
          </div>
          <div>
            <label className="label">Default prefilled message</label>
            <textarea rows={3} className="input" defaultValue="Hi, I'd like to ask about a treatment at U.K Aesthetics Lounge." />
          </div>
          <button className="btn-primary">Save WhatsApp settings</button>
        </div>

        <div className="card space-y-4">
          <h2 className="font-serif text-xl">Payments</h2>
          <div>
            <label className="label">Stripe secret key</label>
            <input className="input" placeholder="sk_live_..." />
          </div>
          <div>
            <label className="label">Default payment rule</label>
            <select className="input">
              <option>Per treatment (use each treatment's own rule)</option>
              <option>Force full payment</option>
              <option>Force deposit only</option>
              <option>Force pay on arrival</option>
            </select>
          </div>
          <button className="btn-primary">Save payment settings</button>
        </div>

        <div className="card space-y-4">
          <h2 className="font-serif text-xl">Clinic hours</h2>
          {["Mon-Fri", "Saturday", "Sunday"].map((d) => (
            <div key={d} className="flex items-center gap-3">
              <label className="w-24 text-sm">{d}</label>
              <input type="time" defaultValue="10:00" className="input w-32" />
              <span>–</span>
              <input type="time" defaultValue="19:00" className="input w-32" />
            </div>
          ))}
          <button className="btn-primary">Save hours</button>
        </div>

        <div className="card space-y-4">
          <h2 className="font-serif text-xl">Booking rules</h2>
          <div>
            <label className="label">Slot length (minutes)</label>
            <input type="number" defaultValue={30} className="input" />
          </div>
          <div>
            <label className="label">Minimum notice before booking (hours)</label>
            <input type="number" defaultValue={2} className="input" />
          </div>
          <div>
            <label className="label">Cancellation window (hours)</label>
            <input type="number" defaultValue={24} className="input" />
          </div>
          <button className="btn-primary">Save rules</button>
        </div>
      </div>
    </div>
  );
}
