import { poems } from "../../../data/volume-one"

export default function handler(req, res) {
    res.status(200).json(poems)
}