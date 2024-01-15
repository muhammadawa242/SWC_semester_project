import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUsersByName = async (req, res) => {
  try {
    const str = req.params.str;
    const users = await User.find({$or: [
      { firstName: { $regex: str, $options: "i" } },
      { lastName: { $regex: str, $options: "i" } },
    ]});
    
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUsersByLocation = async (req, res) => {
  try {
    const str = req.params.str;
    const users = await User.find({location: { $regex: str, $options: "i" } });
    
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUsersByOccupation = async (req, res) => {
  try {
    const str = req.params.str;
    const users = await User.find({occupation: { $regex: str, $options: "i" } });
    
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const addRemoveFollower = async (req, res) => {
  try {
    const { userId, personId } = req.params;
    const user = await User.findById(userId);
    const person = await User.findById(personId);
    
    // if already following that person, unfollow
    if (user.following.includes(personId)) {
      user.following = user.following.filter((id) => id !== personId);
      person.followers = person.followers.filter((id) => id !== userId);
    } else {
      user.following.push(personId);
      person.followers.push(userId);
    }
    
    const updatedUser = await user.save();
    await person.save();

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, password, email, occupation, location } = req.body;
    
    // update user by id but avoid updating picturePath if no file is uploaded or password if no password is provided
    let updatedUser = await User.findByIdAndUpdate(
      id,
      { firstName, lastName, email, occupation, location},
      { new: true }
    );

    
    if (password !== "") {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      updatedUser = await User.findByIdAndUpdate(
        id,
        { password},
        { new: true }
      );
    }

    if(req.file) {
      updatedUser = await User.findByIdAndUpdate(
        id,
        { picturePath: req.file.key},
        { new: true }
      );
    }

    

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};