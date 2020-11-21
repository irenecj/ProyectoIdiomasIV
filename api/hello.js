module.exports = (req, res) => {
  const { name = 'Irene Cano' } = req.query

  res.status(200).send(`Prueba realizada para el proyecto de ${name}!`)
}
