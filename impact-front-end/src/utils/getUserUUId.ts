export const getUUId = () => {
    var navigator_info = window.navigator;
    var screen_info = window.screen;
    var uid:any = navigator_info.mimeTypes.length;
    uid += navigator_info.userAgent.replace(/\D+/g, '');
    uid += navigator_info.plugins.length;
    uid += screen_info.height || '';
    uid += screen_info.width || '';
    uid += screen_info.pixelDepth || '';
    console.log(uid);
    return uid
}