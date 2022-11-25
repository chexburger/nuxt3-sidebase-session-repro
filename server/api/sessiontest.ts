// export default defineEventHandler(event => event.context.session);
export default defineEventHandler(async event => {
    console.log(event.context);
    return event.context.session;
})