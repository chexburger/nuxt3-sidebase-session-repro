export default defineEventHandler(async event => {
    const requestSession = event.context.session;
    if(requestSession){
        console.log("has session", requestSession);
    }else{
        console.log("no session");
    }
})