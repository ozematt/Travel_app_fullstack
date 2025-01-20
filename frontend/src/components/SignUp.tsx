import { Button } from ".";
import { decoration } from "../assets";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SignUpSchema, type SignUpSchemaT } from "../lib/types";
import { authenticate } from "../lib/authenticate.js";
import { getUserName } from "../lib/helpers.js";
import { useCallback } from "react";

const SignUp = () => {
  //
  ////DATA
  const navigate = useNavigate();

  //react hook form
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<SignUpSchemaT>({
    resolver: zodResolver(SignUpSchema),
  });

  ////LOGIC
  //handle form submit
  const onSubmit = useCallback(
    async ({ email, password }: SignUpSchemaT) => {
      try {
        await authenticate("register", email, password);

        clearErrors();
        alert("User add and login successfully!");

        //add user to local storage, so user name can be seen
        const user = getUserName(email);
        localStorage.setItem("user", JSON.stringify(user));
        reset(); //reset form fields
        navigate("/"); //navigate to home page
      } catch (error: any) {
        setError("email", {
          type: "custom",
          message: "User already exist! Please try logging in.",
        });
        console.error("An error occurred:" + error.message);
      }
    },
    [authenticate, clearErrors, getUserName, navigate, setError]
  );

  ////UI
  return (
    <section className="px-[34px] sm:px-[120px] mt-[80px] w-full">
      <div className="flex flex-col justify-center shadow-customMorph items-start max-w-[800px] min-h-[450px] rounded-xl  max-sm:p-[40px] p-[80px] mx-auto gap-10 relative dark:bg-gray-900 dark:shadow-none">
        {" "}
        <h2 className="font-volkhov font-bold text-5xl my-8 z-10 dark:text-stone-200">
          Make your account:
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
          className="flex flex-col items-start justify-start gap-5 w-full z-10"
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
            type="new-password"
            placeholder="Your password"
            className="bg-no-repeat bg-[center_left_1.5rem] focus:outline-none focus:ring-1 ring-black pl-[3.2rem]  w-full max-w-[500px] h-[70px] rounded-xl placeholder:pl-1"
          />
          {errors.password && (
            <p className="text-red-500 text-[14px] pl-1  leading-[5px]">
              {errors.password.message}
            </p>
          )}
          <input
            {...register("confirmPassword")}
            type="new-password"
            placeholder="Confirm password"
            className="bg-no-repeat bg-[center_left_1.5rem] focus:outline-none focus:ring-1 ring-black pl-[3.2rem]  w-full max-w-[500px] h-[70px] rounded-xl placeholder:pl-1"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-[14px] pl-1  leading-[5px]">
              {errors.confirmPassword.message}
            </p>
          )}
          <Button type={"submit"}>Sign Up</Button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
