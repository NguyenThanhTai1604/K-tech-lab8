import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { FormValues } from "../types/AuthForm.type";
import { FormSchema } from "../schema/AuthForm.schema";

const AuthForm = () => {
    const [isSignup, setIsSignup] = useState(false);
    // const [showPassword, setShowPassword] = useState(false);
    
     const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(FormSchema),
  });

   useEffect(() => {
  const subscription = watch((value) => {
    console.log("Form changed:", value);
  });

  return () => subscription.unsubscribe();
}, [watch]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
    reset();
  };
  return (
     <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">{isSignup ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          {isSignup && (
            <div>
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
            <p className="text-red-600 text-sm mt-1">{errors.name?.message}</p>
          </div>
          )}

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
            <p className="text-red-600 text-sm mt-1">{errors.email?.message}</p>
          </div>

          {/* Phone */}
          {isSignup && (
            <div>
            <input
              type="text"
              placeholder="Phone"
              {...register("phone")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
            <p className="text-red-600 text-sm mt-1">{errors.phone?.message}</p>
          </div>
          )}

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
            <p className="text-red-600 text-sm mt-1">{errors.password?.message}</p>
          </div>

          {/* Confirm Password */}
          {isSignup && (
            <div>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
            <p className="text-red-600 text-sm mt-1">
              {errors.confirmPassword?.message}
            </p>
          </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              {isSignup ? "Submit" : "Login"}
            </button>
            <button
                onClick={() => setIsSignup(!isSignup)}
              type="button"
              className="w-full bg-gray-200 text-black py-2 rounded-md hover:bg-gray-300 transition"
            >
              {isSignup ? "Login": "Signup"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthForm