/**Dto */
const programDto = require("../../model/dto/program.dto")
const config = require("config")

exports.createprogram = (req, res, next) => {
    let program = {
        id: req.body.id,
        code: req.body.code,
        name: req.body.number,
        nameDirector: req.body.nameDean
    }
    programDto.create(program, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(201).json({
            info: data
        })
    })
}
exports.updateprogram = (req, res, next) => {
    let program = {
        id: req.body.id,
        code: req.body.code,
        name: req.body.number,
        nameDirector: req.body.nameDean
    }
    programDto.update({ _id: req.body.id }, program, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        } else {
            res.status(201).json({
                info: data
            })
        }
    })

}
exports.getAll = (req, res, next) => {

    programDto.getAll((err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(200).json({
            info: data
        })
    })

}
exports.getByCode = (req, res, next) => {

    periodDto.getByCode({ code: req.params.code }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(200).json({
            info: data
        })
    })

}


exports.deleteprogram = () => {

    programDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(204).json({
            info: data
        })
    })

}