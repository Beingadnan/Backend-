import express from "express";
import { createStudent, deleteStudent, findStudent, updateStudent } from "../controller/studentController.mjs";
const router=express.Router();
router.get('/findstudents',findStudent);
router.post('/addstudent',createStudent)
router.delete('/delete',deleteStudent)
router.post('/update',updateStudent)
export default router
