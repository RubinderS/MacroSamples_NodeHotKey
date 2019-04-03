export function typeCurrentDate(pressKey: any, releaseKey: any, click: any, type: any, paste: any, wait: any, setClipboardText: any, getClipboardText: any, matchCurrentWindowTitle: any) {
    let date = new Date();
    type(date.toLocaleDateString('en-GB'));
}