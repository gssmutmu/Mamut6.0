exports.apicall = async (session, models, vars) => {
    let testing = await session.api.restsample.getSite();
    console.log('testing ', testing);
};