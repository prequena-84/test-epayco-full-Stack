import { Buffer } from "buffer";

export default function codeBase64(data:string): string {
    const code64:string = Buffer.from(data).toString('base64');
    return code64;
};