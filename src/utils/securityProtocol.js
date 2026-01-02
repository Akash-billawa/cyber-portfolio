import CryptoJS from 'crypto-js';

const TRANSMISSION_KEY = 'CYBERSEC_PORTFOLIO_MASTER_KEY_2025';

export const encryptPayload = (data) => {
    const jsonPayload = JSON.stringify({
        sender: data.name,
        contact: data.email,
        message: data.message,
        timestamp: new Date().toISOString(),
        origin_ip: 'TRACED_PROXY_NODE'
    });

    const cipherText = CryptoJS.AES.encrypt(jsonPayload, TRANSMISSION_KEY).toString();
    const integrityHash = CryptoJS.SHA256(jsonPayload).toString(CryptoJS.enc.Hex).substring(0, 12);

    return { cipherText, integrityHash };
};
