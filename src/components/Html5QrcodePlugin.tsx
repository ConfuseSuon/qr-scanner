import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect } from 'react';

const qrcodeRegionId = "html5qr-code-full-region-x";

interface ConfigType {
    fps: number,
    disableFlip: boolean | undefined,
    aspectRatio?: number,
}

// interface PropsType {
//     fps: number,
//     qrbox: number,
//     disableFlip: boolean,
//     aspectRatio?: number,
//     verbose?: boolean,
//     qrCodeSuccessCallback: (arg1: any, arg2: any) => void,
//     qrCodeErrorCallback: () => any
// }

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props: ConfigType) => {
    const config: ConfigType = {
        fps: props.fps,
        aspectRatio: props.aspectRatio,
        disableFlip: props.disableFlip
    }
    return config;
};

const Html5QrcodePlugin = (props: any) => {

    useEffect(() => {
        // when component mounts
        const config = createConfig(props);
        const verbose = props.verbose === false;
        // Suceess callback is required.
        if (!(props.qrCodeSuccessCallback)) {
            throw "qrCodeSuccessCallback is required callback.";
        }
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
        html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);


    }, []);

    return (
        <div id={qrcodeRegionId} />
    );
};

export default Html5QrcodePlugin;
