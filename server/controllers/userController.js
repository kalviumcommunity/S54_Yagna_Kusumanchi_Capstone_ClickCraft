const Users = require("../Schemas/UserSchema")

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const createUser = async (req, res) => {
    const { name, picture, email } = req.body

    try {
        const oldUser = await Users.findOne({ email })
        if (oldUser) {
            return res.json({ error: "User already exists" })
        }
        await Users.create({
            name,
            FirstName: capitalize(name.split(' ')[0]),
            LastName: capitalize(name.split(' ')[1]),
            UserId: Math.floor(Math.random() * 10) + 1,
            picture,
            email,
            portfolios: [],
            views: 0,
            likes: 0,
            liked: [],
            profile: {
                name: name,
                firstName: "",
                lastName: "",
                position: [],
                email: "",
                social: {
                    facebook: "",
                    instagram: "",
                    github: "",
                    linkedIn: ""
                },
                bio: "",
                skills: [],
                hobies: [],
                projects: [
                    {
                        title: "",
                        live: "",
                        source:"",
                        image:""
                    }
                ]
            }
        })

        res.status(201).json({ message: 'User created successfully' })

    } catch (err) {
        console.log(err)
        res.status(400).send({ message: "User already exists" })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await Users.find();
        res.status(200).json(allUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getUser = async (req, res) => {
    const firstName = capitalize(req.params.name);
    const userId = req.params.id;

    try {
        const data = await Users.findOne({ FirstName: firstName, UserId: userId });

        if (!data) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
}

const getUserByEmail = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await Users.findOne({ _id: id });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
}

module.exports = { createUser, getAllUsers, getUser, getUserByEmail }