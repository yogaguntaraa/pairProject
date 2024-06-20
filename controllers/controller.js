const { Courses, UserCourse, User } = require("../models");
const easyinvoice = require('easyinvoice');

class Controller {
    static async registerForm(req, res) {
        try {
            // res.render("register");
        } catch (err) {
            console.log(err);
            res.send(err.message);
        }
    }

    static async postRegister(req, res) {
        try {
            
        } catch (err) {
            console.log(err);
            res.send(err.message);
        }
    }

    static async home(req, res) {
        try {
            res.redirect("/courses")
        } catch (err) {
            console.log(err);
            res.send(err.message);
        }
    }

    static async readCourse(req, res) {
        try {
            const data = await Courses.findAll();
            res.render("ShowAllCourse", { data });
        } catch (err) {
            console.log(err);
            res.send(err.message);
        }
    }

    static async showDetail(req, res) {
        try {
            const { id } = req.params;
            const course = await Courses.findByPk(id);
            res.render('ShowDetail', { data: course });
        } catch (err) {
            console.log(err);
            res.send(err.message);
        }
    }

    static async buyCourse(req, res) {
        try {
            const { id } = req.params;
            const course = await Courses.findByPk(id);
            await course.increment("amount")
            res.render('buyCourse', { data: [course] });
        } catch (err) {
            console.log(err);
            res.send(err.message);
        }
    }

    static async generateInvoice(req, res) {
        try {
            const { productName, price, quantity, buyerName } = req.body;
            const { id } = req.params;

            const course = await Courses.findByPk(id);
            const totalPrice = Number(price) * Number(quantity);

            const data = {
                sender: {
                    company: 'Your Company Name',
                    address: 'Your Company Address',
                    zip: '12345',
                    city: 'Your City',
                    country: 'Your Country'
                },
                client: {
                    company: buyerName,
                    address: 'Client Address',
                    zip: '67890',
                    city: 'Client City',
                    country: 'Client Country'
                },
                information: {
                    number: `INV-${id}`,
                    date: new Date().toISOString().split('T')[0],
                    'due-date': new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // Due date in 15 days
                },
                products: [
                    {
                        quantity: quantity,
                        description: productName,
                        price: price
                    }
                ],
                'bottom-notice': 'Kindly pay your invoice within 15 days.',
                settings: {
                    currency: 'IDR'
                }
            };

            easyinvoice.createInvoice(data, function(result) {
                res.render('invoice', { pdf: result.pdf, course, totalPrice });
            });
        } catch (err) {
            console.log(err);
            res.send(err.message);
        }
    }

    static async downloadInvoice(req, res) {
        try {
            const { pdf } = req.body;
            const pdfBuffer = Buffer.from(pdf, 'base64');

            res.set({
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="invoice.pdf"'
            });

            res.send(pdfBuffer);
        } catch (err) {
            console.log(err);
            res.status(500).send(err.message);
        }
    }
}

module.exports = Controller;
