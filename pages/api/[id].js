import prisma from "../../lib/prisma";

// DELETE /api/post/:id
export default async function handle(req, res) {
  const recordtId = req.query.id;
  if (req.method === "DELETE") {
    const record = await prisma.student_record.delete({
      where: { record_id: parseInt(recordtId)  },
    });
    res.json(record);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
