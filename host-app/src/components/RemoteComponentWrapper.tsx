import React, { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";

const RemoteHeader = React.lazy(() => import("remote_app/Header"));
const RemoteButton = React.lazy(() => import("remote_app/Button"));

const RemoteComponentWrapper = () => {
  return (
    <div className="p-4">
      <Suspense fallback={<LoadingSpinner />}>
        <RemoteHeader />
      </Suspense>

      <div className="mt-4">
        <Suspense fallback={<LoadingSpinner />}>
          <RemoteButton
            text="Remote Button"
            onClick={() =>
              alert(
                "Well done you've imported the MF remote component successfully"
              )
            }
          />
        </Suspense>
      </div>
    </div>
  )
}

export default RemoteComponentWrapper