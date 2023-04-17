import prisma from "../../lib/prisma"


export default async function queryData(req, res) {
  const student = await prisma.student.findMany()

  res.json(student)
}