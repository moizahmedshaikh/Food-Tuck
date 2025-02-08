"use client";
import { useSignIn, useUser } from "@clerk/nextjs"; // Add useUser
import HeroLinks from "@/components/HeroLinks";
import Nav2 from "@/components/Nav2";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// djnaes

const Signin = () => {
  const router = useRouter();
  const { signIn, isLoaded, setActive } = useSignIn();
  const { user } = useUser(); // Check if the user is already signed in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // If the user is already signed in, redirect them to the dashboard
    if (user) {
      router.push("/");
      return;
    }

    if (!isLoaded) {
      setError("Clerk is not ready. Please try again later.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Attempt to sign in
      const result = await signIn.create({
        identifier: email,
        password,
      });

      // Check if sign-in was successful
      if (result.status === "complete") {
        // Set the active session
        await setActive({ session: result.createdSessionId });
        // Redirect to the dashboard
        router.push("/");
      } else {
        // Handle incomplete sign-in (e.g., multi-factor authentication)
        setError(
          "Sign-in process is incomplete. Please check your email for further instructions."
        );
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Sign-in error:", err.message);
        setError(
          err.message || "An error occurred during sign-in. Please try again."
        );
      } else if (typeof err === "object" && err !== null && "errors" in err) {
        // Agar error ek object hai aur usme "errors" property exist karti hai
        const errorObject = err as { errors?: { message?: string }[] };
        setError(
          errorObject.errors?.[0]?.message ||
            "An error occurred during sign-in. Please try again."
        );
      } else {
        console.error("Sign-in error:", err);
        setError("An unknown error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Nav2 />
      <HeroLinks heading="Sign In" url1="Home" url2="SignIn" />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white w-[424px] p-6 rounded-lg shadow-md">
          <div className="flex flex-col-reverse justify-center items-center">
            <h2 className="text-2xl Headings font-semibold text-gray-800 mb-6">
              Sign In
            </h2>
            <div className="w-14">
              <Image src={"/login.gif"} height={500} width={500} alt="gif" />
            </div>
          </div>
          <form onSubmit={handleSignIn} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 text-[#333333] py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </div>
            {/* Password Field */}
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 text-[#333333] py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </div>
            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4" />
              <label className="ml-2 text-gray-600 text-sm">Remember me?</label>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isLoaded || loading}
              className={`w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 ${
                !isLoaded || loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
          {/* Forget Password */}
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-[#333333]">
              Not a member?
              <span
                onClick={() => router.push("/signup")}
                className="font-semibold text-textp cursor-pointer"
              >
                {" "}
                SignUp
              </span>
            </p>
          </div>
          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          {/* Social Sign In */}

          {/* ✅ Google Sign-up Button */}

          <button
            className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 text-gray-600 hover:bg-gray-100"
            onClick={() =>
              signIn?.authenticateWithRedirect({
                strategy: "oauth_google",
                redirectUrl: "/auth-callback",
                redirectUrlComplete: "/",
              })
            }
            disabled={!isLoaded}
          >
            <Image
              height={1000}
              width={1000}
              src="/google.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>

          {/* <SignInButton mode="modal">
            <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 text-gray-600 hover:bg-gray-100">
              <Image
                height={20}
                width={20}
                src="/google.png"
                alt="Google"
                className="mr-2"
              />
              Sign in with Google
            </button>
          </SignInButton> */}
        </div>
      </div>
    </div>
  );
};

export default Signin;
