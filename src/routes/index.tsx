import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import MobileFrame from "../components/MobileFrame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Welcome to PopX" },
      { name: "description", content: "Secure sign-in and a fast path to your PopX workspace." },
      { property: "og:title", content: "Welcome to PopX" },
      { property: "og:description", content: "Secure sign-in and a fast path to your PopX workspace." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <MobileFrame>
      <h1 className="h-title">Welcome to PopX</h1>
      <p className="h-sub">Secure sign-in and a fast path to your<br />PopX workspace.</p>
      <div className="bottom-actions">
        <Link to="/signup"><button className="btn btn-primary">Create Account</button></Link>
        <Link to="/login"><button className="btn btn-secondary">Already Registered? Login</button></Link>
      </div>
    </MobileFrame>
  );
}
