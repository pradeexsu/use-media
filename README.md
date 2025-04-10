# @pradeexsu/use-media

A lightweight and easy-to-use React hooks library that provides access to the user's microphone and camera through modern browser APIs.

## Installation

Install the package using npm:

```bash
npm install @pradeexsu/use-media
```

## Usage

### Prerequisites

Ensure that you wrap your application with the MediaProvider before using the useMedia hook. This provider should be implemented in your project to manage the media context.

### Example

```tsx
import React from "react";
import { useMedia, MediaProvider } from "@pradeexsu/use-media";

const App = () => {
  return (
    <MediaProvider>
       <MediaComponent />
    </MediaProvider>
  );
};

const MediaComponent = () => {
  const { useCameraState, useMicrophoneState } = useMedia();
  const {
    camera,
    optimisticIsMute: isCameraMute,
    hasBrowserPermission: hasCameraPermission,
    mediaStream,
  } = useCameraState();

  const {
    microphone,
    optimisticIsMute: isMicrophoneMute,
    hasBrowserPermission: hasMicrophonePermission,
    status: microphoneStatus,
  } = useMicrophoneState();

 const toggleMicrophone = async () => {
    try {
      await microphone.toggle();
    } catch (error) {
      console.error(error);
    }
  };
  const toggleCamera = async () => {
    try {
      await camera.toggle();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (vidRef.current && mediaStream) {
      vidRef.current.srcObject = mediaStream;
    }
  });

  return (
    <div>
       <video
        ref={vidRef}
        autoPlay
        muted
        style={{ objectFit: "cover" }}/>
      <button onClickCapture={toggleCamera}>Toggle camera</button>
      <button onClickCapture={toggleMicrophone}>Toggle microphone</button>    </div>
  );
};

export default App;
```

<!-- // write contract here... -->

### Example Error Handling

If useMedia is used outside of the MediaApplicationProvider, it will throw the following error:

#### Dependencies

- react: ^17.0.0 || ^18.0.0 (peer dependency)
- @stream-io/video-react-sdk: 1.14.1

#### License

This project is licensed under the ISC License.

#### Author

Pradeep Suthar (pradeexsu@gmail.com)
