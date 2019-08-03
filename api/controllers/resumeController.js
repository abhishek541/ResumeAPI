module.exports = {
    getSample(req, res, next) {
        console.log("Request is :", req.body);
        res.json({"Name": "Abhishek Kumar", "Role": "Software Engineer", "Company": "ABC"});
    }
};