const { Contact } = require("../models");

exports.getAll = async (req, res, next) => {
  try {
    const allContacts = await Contact.find();
    res.json(allContacts);
  } catch (error) {
    next(error);
  }
};



exports.create = async (req, res, next) => {
  try {
   
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
  
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contacts = await Contact.findById(id);
    res.json(contacts);

  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;


    const contact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Видалити існуючий продукт
    const contact1 = await Contact.findByIdAndDelete(id);
    res.json(contact1);
  } catch (error) {
    next(error);
  }
};
exports.favorite = async (req, res, next) => {
  const { contactId } = req.params;
  if (!req.body) {
    return res.status(400).json({ message: "missing field favorite" });
  }
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId, 
      {
       favorite: req.body.favorite
      },
      {
        new: true,
      }
    );
    if (!updatedContact) {
      return res
        .status(404)
        .json({ message: `Contact with id ${contactId} not found` });
    }
    res.json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, Not found" });
  }
};
