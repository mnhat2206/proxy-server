import * as React from "react";
import Header from "../common/headers";
import { LayoutProps } from "@/models";

export function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
