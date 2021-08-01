import { DOMAttributes, AriaAttributes, ButtonHTMLAttributes } from "react";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    height?: number | string;
    width?: number | string;
    loading?: boolean;
  }
}
