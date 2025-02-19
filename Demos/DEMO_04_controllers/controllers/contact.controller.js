const ContactController = {
  getContact: (req, res) => {
    res.render("contact");
  },
  postForm: (req, res) => {
    const { message, email } = req.body;
    res.status(200).json({
      message: "Formulaire soumis avec succès",
      datas: {
        email,
        message,
      },
    });
  },
};

module.exports = ContactController;
