import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorConTroller from "../controllers/doctorController"
import patientController from "../controllers/patientController"
import specialtyController from "../controllers/specialtyController"
import clinicController from "../controllers/clinicController"
import scheduleController from "../controllers/scheduleController"
import emailController from "../controllers/emailController"

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


    router.post('/api/create-new-doctor', doctorConTroller.createDoctor)//ok KillMediPk
    router.get('/api/get-all-doctor-by-clinicId', doctorConTroller.getAllDoctorByClinicId)//ok KillMediPk
    router.put('/api/edit-doctor-of-clinic', doctorConTroller.editDoctorOfClinic); //ok KillMediPk
    router.get('/api/top-doctor-home', doctorConTroller.getTopDoctorHome) //ok KillMediPk
    router.get('/api/top-medipackage-home', doctorConTroller.getTopMediPackageHome) //ok  KillMediPk
    router.get('/api/get-all-doctors', doctorConTroller.getAllDoctors)
    router.post('/api/save-info-doctors', doctorConTroller.postInfoDoctors)
    router.get('/api/get-detail-doctor-by-id', doctorConTroller.getDetailDoctorById) //ok
    router.get('/api/get-detail-medipackage-by-id', doctorConTroller.getDetailMediPackageById) //ok
    router.post('/api/bulk-create-schedule', doctorConTroller.bulkCreateSchedule)
    router.get('/api/get-schedule-doctor-by-date', doctorConTroller.getScheduleByDate)
    router.get('/api/get-extra-info-doctor-by-id', doctorConTroller.getExtraInfoDocTorById)
    router.get('/api/get-profile-doctor-by-id', doctorConTroller.getProfileDocTorById)
    router.get('/api/get-list-patient-for-doctor', doctorConTroller.getListPatientForDoctor)
    // viết chung medi_package vào luôn
    router.post('/api/create-new-medipackage', doctorConTroller.createMediPackage)//ok KillMediPk
    router.get('/api/get-all-medipackage-by-clinicId', doctorConTroller.getAllMediPackageByClinicId)//ok KillMediPk
    router.put('/api/edit-medipackage-of-clinic', doctorConTroller.editMediPackageOfClinic); //ok KillMediPk


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
    router.post('/api/login-clinic', clinicController.loginClinic) // ok


    router.post('/api/create-schedule', scheduleController.createSchedule) //ok
    router.delete('/api/delete-schedule', scheduleController.deleteSchedule) //ok
    router.get('/api/get-schedule', scheduleController.getSchedule) // ok
    router.get('/api/get-doctor-by-idclinic-and-iddoctor', scheduleController.getDoctorByIdClinicAndIdDoctor) // ok
    router.get('/api/get-medipk-by-idclinic-and-iddoctor', scheduleController.getMediPkByIdClinicAndIdDoctor) // ok
    router.get('/api/get-schedule-for-user', scheduleController.getScheduleForUser) // ok
    // viết gộp booking vào luôn
    router.post('/api/create-order', scheduleController.createOrder) //ok
    router.get('/api/get-order-by-date', scheduleController.getOrderByDate) // ok
    router.get('/api/get-order-chuaxem-of-clinic', scheduleController.getOrderChuaxemOfClinic) // ok






    router.post('/api/send-mail', emailController.sendSimpleEmail)

    return app.use("/", router);
}

module.exports = initWebRoutes;