import { Paragraph} from "@digdir/designsystemet-react";
import {QrCode} from "../../../components/QrCode.tsx";

interface QrCodeComponentProps {
    url: string
}

export const QrCodeComponent = ({ url }: QrCodeComponentProps) => {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--ds-size-4)'
            }}
        >

            <QrCode url={url} />
            <Paragraph
                style={{ color: 'var(--ds-color-text-default)', textAlign: "center" }}
            >
                Skann med kamera for å fortsette på mobil!
            </Paragraph>
        </div>
    );
};