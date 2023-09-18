const db = require('../db')

class FibonacciController {
    async getOneNumber(req, res) {
        const id = req.params.id
        const number = await db.query(
            'SELECT number FROM fibonacci where id = $1', [id]
        )
        res.json(number.rows[0])
    }
}

module.exports = new FibonacciController()