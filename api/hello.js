module.exports = (req, res) => {
  const { name = 'World' } = req.query

  res.status(200).send(`Helloo ${name}! Prueba realizada para el proyecto de Irene Cano`)
}
