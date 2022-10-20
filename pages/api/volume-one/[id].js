// https://nextjs.org/docs/api-routes/dynamic-api-routes
import { poems } from "../../../data/volume-one"

export default function handler(req, res) {
    const poem = poems.find(({ id }) => id === req.query.id)

    // res.status(200).json({ poem })
    // 👆 this works yay

    if (poem) {
        res.status(200).json({ poem })
    } else {
        res.status(400).json({ message: `sorry, poem ${req.query.id} was not found` })
    }
}