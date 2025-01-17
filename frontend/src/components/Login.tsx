import { Button } from ".";
import { decoration } from "../assets";
// import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailSchema, type EmailSchemaT } from "../lib/types";
import { authenticate } from "../lib/authenticate";
// import { registerUser } from "../lib/authenticate";

const Login = () => {
  //
  ////DATA
  const navigate = useNavigate();
  // const { users } = useUserContext();

  //react hook form
  const {
    register,
    handleSubmit,
    // getValues,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<EmailSchemaT>({ resolver: zodResolver(EmailSchema) });

  ////LOGIC
  //login handler
  const onSubmit = async ({ email, password }: EmailSchemaT) => {
    try {
      await authenticate("login", email, password);

      //if user exist
      clearErrors(["email"]); //clear error
      // localStorage.setItem("user", JSON.stringify(email)); //add user to localStorage
      alert("Hello again!"); //show alert
      navigate("/"); //navigate to home page
    } catch (error: any) {
      setError("email", {
        type: "custom",
        message: "User does not exist! Please try logging in.",
      });
      console.error("An error occurred:" + error.message);
    }

    //check if user exist
    // const userExist = users?.some((user) => user === email);
    //if user does not exist, set error
    // if (!userExist) {
    //   setError("email", { type: "custom", message: "User does not exist" });
    //   return;
  };

  ////UI
  return (
    <section className="px-[34px] sm:px-[120px] mt-[80px] w-full">
      <div className="flex flex-col justify-center shadow-customMorph items-start max-w-[800px] min-h-[450px] rounded-xl  max-sm:p-[40px] p-[80px] mx-auto gap-10 relative dark:bg-gray-900 dark:shadow-none">
        {" "}
        <h2 className="font-volkhov font-bold text-5xl my-8 z-10 dark:text-stone-200">
          Enter your email:
        </h2>
        <img
          src={decoration}
          alt="decoration"
          className="absolute -rotate-45 scale-50  bottom-[110px] left-[-100px] dark:opacity-50 opacity-20 z-[1]"
        />
        <img
          src={decoration}
          alt="decoration"
          className="absolute -rotate-90 scale-75  top-[7px] right-[-80px] dark:opacity-50 opacity-20 z-[1]"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" justify-start max-xl:flex-wrap gap-5 w-full z-10 "
        >
          <input
            {...register("email")}
            type="email"
            placeholder="Your email"
            className=" bg-email-icon bg-no-repeat bg-[center_left_1.5rem] focus:outline-none focus:ring-1 ring-black pl-[3.2rem]  w-full max-w-[500px] h-[70px] rounded-xl placeholder:pl-1"
          />
          {errors.email && (
            <p className="text-red-500 text-[14px] pl-1  leading-[5px]">
              {errors.email.message}
            </p>
          )}
          <input
            {...register("password")}
            type="password"
            placeholder="Your password"
            className=" bg-email-icon bg-no-repeat bg-[center_left_1.5rem] focus:outline-none focus:ring-1 ring-black pl-[3.2rem]  w-full max-w-[500px] h-[70px] rounded-xl placeholder:pl-1"
          />
          {errors.password && (
            <p className="text-red-500 text-[14px] pl-1  leading-[5px]">
              {errors.password.message}
            </p>
          )}

          <Button type={"submit"}>Login</Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
