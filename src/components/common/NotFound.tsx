import React from "react";
import { ErrorMessage } from "./ErrorMessage.tsx";

export function NotFound({ name }: { name: string }) {
  const message = `${name} not found`;
  return <ErrorMessage message={message} error={false} />;
}
