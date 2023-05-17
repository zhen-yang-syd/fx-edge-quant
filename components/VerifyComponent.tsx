import React, { FC } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { SITE_KEY } from '@/utils';
type Props = {
    setPassVerification: (value: boolean) => void
}
const VerifyComponent: FC<Props> = ({ setPassVerification }) => {
    function onChange(value: any) {
        setPassVerification(true)
    }
    return (
        <ReCAPTCHA
            sitekey={`${SITE_KEY}`}
            onChange={onChange}
            onError={() => setPassVerification(false)}
        />
    )
}

export default VerifyComponent;