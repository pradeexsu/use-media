'use client';

import React, { createContext, ReactNode } from "react";

import { useCallStateHooks } from "@stream-io/video-react-sdk";

type useCameraStateType = ReturnType<
  typeof useCallStateHooks
>["useCameraState"];
type useMicrophoneStateType = ReturnType<
  typeof useCallStateHooks
>["useMicrophoneState"];

export const MediaApplicationContext = createContext<{
  useCameraState: useCameraStateType;
  useMicrophoneState: useMicrophoneStateType;
  useMedia: typeof useCallStateHooks;
} | null>(null);

export const MediaApplicationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { useCameraState, useMicrophoneState } = useCallStateHooks();

  return (
    <MediaApplicationContext.Provider
      value={{
        useCameraState,
        useMicrophoneState,
        useMedia: useCallStateHooks,
      }}
    >
      {children}
    </MediaApplicationContext.Provider>
  );
};
