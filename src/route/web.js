import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorConTroller from "../controllers/doctorController"
import patientController from "../controllers/patientController"
import specialtyController from "../controllers/specialtyController"
import clinicController from "../controllers/clinicController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage); //ok
    router.get('/CRUD', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displaygetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD)

    router.post('/api/login', userController.handleLogin); //ok 
    router.get('/api/get-all-user', userController.handleGetAllUser)
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);
    router.get('/api/allcode', userController.getAllCode)

    router.get('/api/top-doctor-home', doctorConTroller.getTopDoctorHome)
    router.get('/api/get-all-doctors', doctorConTroller.getAllDoctors)
    router.post('/api/save-info-doctors', doctorConTroller.postInfoDoctors)
    router.get('/api/get-detail-doctor-by-id', doctorConTroller.getDetailDoctorById)
    router.post('/api/bulk-create-schedule', doctorConTroller.bulkCreateSchedule)
    router.get('/api/get-schedule-doctor-by-date', doctorConTroller.getScheduleByDate)
    router.get('/api/get-extra-info-doctor-by-id', doctorConTroller.getExtraInfoDocTorById)
    router.get('/api/get-profile-doctor-by-id', doctorConTroller.getProfileDocTorById)
    router.get('/api/get-list-patient-for-doctor', doctorConTroller.getListPatientForDoctor)

    router.post('/api/patient-book-appointment', patientController.postBookAppointment)
    router.post('/api/verify-book-appointment', patientController.postVerifyBookAppointment)

    router.post('/api/create-new-specialty', specialtyController.createSpeciatly)
    router.get('/api/get-specialty', specialtyController.getAllSpeciatly) //ok
    router.get('/api/get-detail-speciatly-by-id', specialtyController.getDetailSpecialtyById) //ok
    router.put('/api/edit-specialty', specialtyController.editSpecialty); //ok
    router.delete('/api/delete-specialty', specialtyController.deleteSpecialty) //ok

    router.post('/api/create-new-clinic', clinicController.createClinic) //ok
    router.get('/api/get-clinic', clinicController.getAllClinic) // ok
    router.get('/api/get-detail-clinic-by-id', clinicController.getDetailClinicById) //ok
    router.put('/api/edit-clinic', clinicController.editClinic); //ok
    router.delete('/api/delete-clinic', clinicController.deleteClinic) //ok

    return app.use("/", router);
}

module.exports = initWebRoutes;