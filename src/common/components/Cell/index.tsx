import type { HTMLAttributes } from "react";

export type Props = {
  children: React.ReactElement | string | number;
} & HTMLAttributes<HTMLButtonElement>;

const Cell = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="bg-neutral-800 text-2xl border border-neutral-500 p-3 hover:bg-neutral-600 transition-colors leading-none"
    >
      {children}
    </button>
  );
};

export default Cell;
