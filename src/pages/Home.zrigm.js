// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixWindow from 'wix-window';

$w.onReady(function () {
wixWindow.getBoundingRect().then((windowSizeInfo) => {
                        let windowHeight = windowSizeInfo.window.height;
                        console.log(windowHeight);
                        $w('#columnStrip18'). = "#ff9900";
                        })
})