import { AUTH_BASE } from "../constants/api";

export const authenticate = async (
  auth: string,
  email: string,
  password: string
) => {
  try {
    const response = await fetch(
      AUTH_BASE + (auth === "register" ? "/register" : "/login"),
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      }
    );
    if (!response) {
      throw new Error("Network response not ok");
    }
    const result = await response.json();
    console.log(result);

    if (result.token) {
      localStorage.setItem("token", result.token);
    } else {
      throw Error("❌ Failed to authenticate...");
    }
    return result.token;
  } catch (error) {
    console.error("There has been a problem with fetch:", error);
    throw error;
  }
};
