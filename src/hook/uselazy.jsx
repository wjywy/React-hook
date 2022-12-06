import React from "react";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
export default function UseLazy(Component) {
  const Lazy = lazy(() => Component);
  return (props) => (
    <Suspense fallback={<Spin />}>
      <Lazy {...props} />
    </Suspense>
  );
}
