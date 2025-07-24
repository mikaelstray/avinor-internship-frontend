import {Heading, Paragraph} from "@digdir/designsystemet-react";
import {QrCode} from "../../../components/QrCode.tsx";

export const QrCodeComponent = () => {
    const targetUrl = "google.com";

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--ds-size-4)'
            }}
        >

            <QrCode url={targetUrl} />
            <Paragraph
                style={{ color: 'var(--ds-color-text-default)' }}
            >
                Scan med kamera for å fortsette på mobil
            </Paragraph>
        </div>
    );
};