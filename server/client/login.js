exports.submit = async (session, models, vars) => {
    let output = await session.api.restsample.authenticate({
        username: models.login.username,
        password: models.login.password
    });
    vars.session.loginFiles = output.files;
    let foo = vars.session.loginFiles[0].status;
    if (foo == 'loginsuccess') {
        let output2 = await session.api.restsample.getSite(models.login);
        models.site.group = output2.sites;
        await session.screen('site');
    } else {
        await session.screen('login');
    }
};