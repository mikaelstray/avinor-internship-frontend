import {QRCodeSVG} from "qrcode.react";

interface QRCodeGeneratorProps {
    url: string;
    size?: number;
}

export const QrCode = ({ url, size = 128 }: QRCodeGeneratorProps) => {
    if (!url) {
        return null;
    }

    return (
        <QRCodeSVG
            title={"Mobil nettside"}
            value={url}
            size={size}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"L"}
        />
    )
}