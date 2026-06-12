import { createFileRoute } from "@tanstack/react-router";
import MobileFrame from "../components/MobileFrame";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Account Settings — PopX" },
      { name: "description", content: "Manage your PopX account settings." },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  return (
    <MobileFrame title="Account Settings">
      <div className="acct-card">
        <div className="avatar-wrap">
          <div className="avatar">
            <img src="/profile.jpg" alt="Marry Doe profile" />
          </div>
          <div className="avatar-badge" aria-hidden>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
        </div>
        <div>
          <p className="acct-name">Marry Doe</p>
          <p className="acct-mail">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="acct-bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </MobileFrame>
  );
}