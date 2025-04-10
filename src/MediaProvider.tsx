'use client';

import React, { ReactNode, useMemo } from "react";

import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { MediaApplicationProvider } from "./MediaApplicationProvider";

export const MediaProvider = ({ children }: { children: ReactNode }) => {
  const { videoClient, call } = useMemo(() => {
    const _videoClient = new StreamVideoClient("...");

    _videoClient.connectUser(
      {
        id: "user-id",
        name: "user-name",
        image: "user-image-url",
      } as User,
      () => Promise.resolve("token")
    );

    const call = _videoClient.call("call-type", "call-id");
    return {
      videoClient: _videoClient,
      call,
    };
  }, []);

  return (
    <StreamVideo client={videoClient}>
      <StreamCall call={call}>
        <MediaApplicationProvider>{children}</MediaApplicationProvider>
      </StreamCall>
    </StreamVideo>
  );
};
