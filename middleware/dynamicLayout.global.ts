export default defineNuxtRouteMiddleware(async (to, from) => {
    if (!to.meta.layout) {
        let url = to.path;
        let layout = 'default';
        switch (url.split('/')[1]) {
            case 'dashboard':
                layout = 'dashboard';
                break;
            case 'auth':
                layout = 'auth';
                break;
            default:
                layout = 'default';
                break;
        }
        //@ts-expect-error
        to.meta.layout = layout;
    }
});