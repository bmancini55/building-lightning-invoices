import { ILndRpcClient } from "./ILndRpcClient";
import { Lnd } from "./v0.12.1-beta/Types";

export class LndMessageSigner {
    constructor(readonly client: ILndRpcClient) {}

    public async sign(msg: Buffer): Promise<string> {
        const result = await this.client.signMessage(msg);
        return result.signature;
    }

    public async verify(msg: Buffer, signature: string): Promise<Lnd.VerifyMessageResponse> {
        const result = await this.client.verifyMessage(msg, signature);
        return result;
    }
}