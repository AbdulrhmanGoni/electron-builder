import { app } from "electron";
import * as electronUpdater from "electron-updater";
import semver from "semver";

async function main() {
    await app.whenReady();

    const { autoUpdater } = electronUpdater
    autoUpdater.currentVersion = semver.parse("1.7.0");
    autoUpdater.forceDevUpdateConfig = true;
    autoUpdater.autoDownload = false;
    autoUpdater.allowPrerelease = true;

    await autoUpdater.checkForUpdates()
        .then(console.log)
        .catch(console.error);

    app.exit();
}

main()