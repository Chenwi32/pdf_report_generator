import prisma from '../../lib/prisma'
export default async function handler(req, res) {
  const {
    S_T_name,
    fifth_seq,
    sixth_seq,
    term_av,
    coeff,
    total_score,
    position,
    teacher_remark_sign,
    first_term_av,
    second_term_av,
    total,
    overall_position,
    class_av,
    owner_id,
  } = req.body; 

  const result = await prisma.Student_record.create({
    data: {
      subject_and_teacher_name: S_T_name,
      fifth_seq: parseInt(fifth_seq) ,
      sixth_seq: parseInt(sixth_seq),
      term_av: parseInt(term_av),
      coeff: parseInt(coeff),
      total_score: parseInt(total_score),
      position: position,
      teacher_remark_sign: teacher_remark_sign,
      first_term_av: parseInt(first_term_av),
      second_term_av: parseInt(second_term_av),
      total: parseInt(total),
      overall_position: parseInt(overall_position),
      class_av: parseInt(class_av),
      owner_id: parseInt(owner_id),
    },
  });
    
  res.status(201).json(result) 
}