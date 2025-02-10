import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/env.js";
import prisma from "../prismaClient.js";

export const register = async (req, res, next) => {
  const { username, password } = req.body;

  const salt = await bcrypt.getSalt(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    const user = await prisma.users.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: "24h",
    });
    res.json({ token });
  } catch (error) {
    console.log(error.message);
    next(error);
    res.send(409);
  }
};
export const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: {
        username: username,
      },
    });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: "24h",
    });
    res.json({ token });
  } catch (error) {
    console.log(error.message);
    next(error);
    res.send(503);
  }
};
