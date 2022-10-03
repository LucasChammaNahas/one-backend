


async function main({ body }, res) /* Void */ {
  return res.status(200).json(body);
}

module.exports = { main };
