//fourth

const routeStu = require('../controller/studentcontrol.js')

module.exports = (app) => {
    /**
     * Welcome route
     */
    app.get('/student', routeStu.readAllstu); // student adalah nama API-nya, baru dibuat di sini
    app.get('/student/:id', routeStu.readStu);
    app.post('/student', routeStu.createStu);
    app.put('/student/:id', routeStu.updateStu);
    app.delete('/student/:id', routeStu.deleteStu);

}
