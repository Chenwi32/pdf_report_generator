import prisma from "../../lib/prisma";
export default async function handler(req, res) {
  const {
    studentId,
    studentName,
    studentClass,
    dateOfBirth,
    placeOfBirth,
    repeater,
    parentOrGuardianAdress,
  } = req.body;

  const result = await prisma.student.create({
    data: {
      student_id: parseInt(studentId),
      student_name: studentName,
      student_class: studentClass,
      date_of_birth: new Date(dateOfBirth) ,
      place_of_birth: placeOfBirth,
      repeater: repeater,
      parent_or_guardian_adress: parentOrGuardianAdress,
      
    },
  });

  res.status(201).json(result);
}
