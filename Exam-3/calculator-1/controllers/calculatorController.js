// controllers/calculatorController.js
exports.add = (req, res) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers) || numbers.some(isNaN)) {
        return res.status(400).send('Invalid input');
    }
    const result = numbers.reduce((acc, num) => acc + num, 0);
    res.json({ result });
};

exports.subtract = (req, res) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers) || numbers.length < 2 || numbers.some(isNaN)) {
        return res.status(400).send('Invalid input');
    }
    const result = numbers.reduce((acc, num) => acc - num);
    res.json({ result });
};

exports.multiply = (req, res) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers) || numbers.some(isNaN)) {
        return res.status(400).send('Invalid input');
    }
    const result = numbers.reduce((acc, num) => acc * num, 1);
    res.json({ result });
};

exports.divide = (req, res) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers) || numbers.length < 2 || numbers.some(isNaN) || numbers.includes(0)) {
        return res.status(400).send('Invalid input');
    }
    const result = numbers.reduce((acc, num) => acc / num);
    res.json({ result });
};
