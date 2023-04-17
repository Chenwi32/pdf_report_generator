import prisma from "../../lib/prisma";


// PUT /api/publish/:id
export default async function handle(req, res) {
  const recordId = req.query.id;
  const record = await prisma.student_record.update({
    where: { record_id: recordId },
    data: { },
  });
  res.json(record);
}
