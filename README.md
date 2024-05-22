# openvidu-react-native-adapter
Npm library that allow to openvidu-browser has react-native support overriding the OpenVidu modules.


openvidu-react-native-adapter exposes the full openvidu-browser and react-native-webrtc.

## Build artifact

```bash
npm run build
```

This command will generate an artifact named **openvidu-react-native-adapter-X.Y.Z.tgz**


## Usage

```javascript
import { OpenViduReactNativeAdapter, OpenVidu, RTCView } from 'openvidu-react-native-adapter';

...

constructor() {
	const openviduReact = new OpenViduReactNativeAdapter();
	openviduReact.initialize();
}

```

