const viewsDataService = require('./views-data.service')
const logger = require('../../services/logger.service')


async function getViewsData(req, res) {
    try {
        const viewData = await viewsDataService.getViewsData()
        res.send(viewData)
    } catch (err) {
        logger.error('Cannot get viewData', err)
        res.status(500).send({ err: 'Failed to get viewData' })
    }
}

async function updateViewsData(req, res) {//update
    try {
        const viewData = req.body

        savedViewData = await viewsDataService.updateViewsData(viewData)
        res.send(savedViewData)
    } catch (err) {
        logger.error('Failed to update ViewData', err)
        res.status(500).send({ err: 'Failed to update ViewData' })
    }
}



module.exports = {
    getViewsData,
    updateViewsData

}