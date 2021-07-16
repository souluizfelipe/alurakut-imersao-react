import { SiteClient } from 'datocms-client';

export default async function getRequests(req, res) {
  if(req.method === 'POST') {
    // const TOKEN = '6926ae10e5779787e631751e9d93ee';
    const client = new SiteClient('6926ae10e5779787e631751e9d93ee');
   
    const record = await client.items.create({
      itemType: "970692",
      ...req.body
    });
  
    res.json({
      record: record,
    })
    return
  }
  
  res.status(404).json({
    message: 'nada de GET aqui não viu, só post mesmo'
  })
}

