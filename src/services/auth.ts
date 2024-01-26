import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";

export class GoogleAuthService {
    constructor() {
        GoogleAuth.initialize();
    }

    async signIn() {
        const googleUser = await GoogleAuth.signIn();
        return googleUser;
    }

    async signOut() {
        await GoogleAuth.signOut();
    }

    async refresh() {
        const googleUser = await GoogleAuth.refresh();
        return googleUser;
    }
}
