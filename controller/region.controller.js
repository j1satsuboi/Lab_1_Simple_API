const db = require('../db')

class RegionController {
    async getOneRegion(req, res) {
        const id = req.params.id
        const region = await db.query(
            'SELECT name FROM region where id = $1', [id]
        )
        res.json(region.rows[0])    
    }
}

module.exports = new RegionController()