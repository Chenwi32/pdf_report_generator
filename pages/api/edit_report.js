import prisma from "../../lib/prisma";


// PUT /api/publish/:id
export default async function handle(req, res) {

  const recordId = req.body.record_id;

  const {
    record_id,
    S_T_name,
    fifthSeq,
    sixthSeq,
    termAv,
    coefficient,
    totalScore,
    positionInput,
    teacherRemarkSign,
    firstTermAv,
    secondTermAv,
    totalInput,
    overallPosition,
    classAv,
    owner_id,
  } = req.body;

  const record = await prisma.student_record.update({
    where: { record_id: recordId },
    data: {
      subject_and_teacher_name: S_T_name,
      fifth_seq: parseInt(fifthSeq),
      sixth_seq: parseInt(sixthSeq),
      term_av: parseInt(termAv),
      coeff: parseInt(coefficient),
      total_score: parseInt(totalScore),
      position: positionInput,
      teacher_remark_sign: teacherRemarkSign,
      first_term_av: parseInt(firstTermAv),
      second_term_av: parseInt(secondTermAv),
      total: parseInt(totalInput),
      overall_position: parseInt(overallPosition),
      class_av: parseInt(classAv),
      owner_id: parseInt(owner_id) ,
    },
  });
  res.status(201).json(record);
}
