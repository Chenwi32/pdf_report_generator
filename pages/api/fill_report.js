
export default async function handler(req, res) {
  const report = JSON.parse(req.body); 
  const requestOptions = { 
    method: 'POST', 
    headers: { 
      'Authorization': `Basic ${process.env.HARPER_API_KEY}`, 
    }, 
    body: JSON.stringify({ 
      report
    }) 
  }; 
  const url = `${process.env.HARPER_FUNCTIONS_URL}/ades/student/fill_report`; 
  const results = await fetch(url, requestOptions).then(r => r.json()); 
  res.status(201).json({ 
    data: { 
    id: results.inserted_hashes[0], 
      ...report 
    }, 
    results 
  }) 
}