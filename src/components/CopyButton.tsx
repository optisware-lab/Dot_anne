"use client";

import { useState } from "react";
import { IconCheck, IconCopy } from "./Icons";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [state, setState] = useState<"idle" | "done" | "fail">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setState("done");
    } catch {
      setState("fail");
    }
    window.setTimeout(() => setState("idle"), 2200);
  }

  return (
    <button type="button" className="copy-btn" onClick={copy} aria-live="polite">
      {state === "done" ? <IconCheck size={16} /> : <IconCopy size={16} />}
      <span>{state === "done" ? "Copied" : state === "fail" ? "Select and copy" : label}</span>
    </button>
  );
}
