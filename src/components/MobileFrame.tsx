import "./mobile-frame.css";
import type { ReactNode } from "react";

export default function MobileFrame({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="mf-page">
      <div className="mf-frame">
        {title && (
          <div className={`mf-topbar${title ? " mf-topbar--titled" : ""}`}>
            <span className="mf-topbar-title">{title}</span>
          </div>
        )}
        <div className="mf-body">{children}</div>
      </div>
    </div>
  );
}