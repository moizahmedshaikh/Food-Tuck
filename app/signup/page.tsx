



"use client";

import HeroLinks from "@/components/HeroLinks";
import Nav2 from "@/components/Nav2";
import { useSignUp } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SignUp = () => {
  const router = useRouter();
  const { isLoaded, signUp } = useSignUp(); // ✅ Clerk ka signup hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState(""); // ✅ Verification Code Input
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVerificationStep, setIsVerificationStep] = useState(false); // ✅ Track Verification Step

  // ✅ SignUp Function
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    console.log("Password:", password);

    if (!isLoaded || !signUp) {
      setError("Authentication service is not ready. Please wait...");
      return;
    }

    try {
      setLoading(true);
      const result = await signUp.create({
        emailAddress: email,
        password: password,
      });

      console.log("Clerk Signup Response:", result); 

      if (result.status === "complete") {
        // ✅ Redirect to signin page instead of setting active session
        router.push("/signin");
      } else {
        await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
        setIsVerificationStep(true); // ✅ Show verification input
        setError("Verification required. Check your email.");
      }
    } catch (err: unknown) {
      console.error("Signup Error:", err);
    
      if (err instanceof Error) {
        setError(err.message || "Signup failed");
      } else if (typeof err === "object" && err !== null && "errors" in err) {
        // Agar error ek object hai aur usme "errors" property exist karti hai
        const errorObject = err as { errors?: { message?: string }[] };
        setError(errorObject.errors?.[0]?.message || "Signup failed");
      } else {
        setError("An unknown error occurred during signup.");
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle Verification Code Submission
  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (!signUp) {
        setError("Signup process is not initialized.");
        return;
      }

      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode, // ✅ Verification Code
      });

      console.log("Verification Result:", result);

      if (result.status === "complete") {
        // ✅ Redirect to signin page instead of setting active session
        router.push("/signin");
      } else {
        setError("Invalid verification code. Please try again.");
      }
    } catch (err: unknown) {
      console.error("Verification Error:", err);
    
      if (err instanceof Error) {
        setError(err.message || "Verification failed");
      } else if (typeof err === "object" && err !== null && "errors" in err) {
        // Agar error ek object hai aur usme "errors" property exist karti hai
        const errorObject = err as { errors?: { message?: string }[] };
        setError(errorObject.errors?.[0]?.message || "Verification failed");
      } else {
        setError("An unknown error occurred during verification.");
      }
    }
  };

  return (
    <div>
      <Nav2 />
      <HeroLinks heading="Sign UP" url1="Home" url2="Signup" />

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white w-[424px] p-6 rounded-lg shadow-md">
          <div className="flex flex-col-reverse justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {isVerificationStep ? "Verify Email" : "Sign Up"}
            </h2>
            <div className="w-14">
              <Image src={"/login2.gif"} height={500} width={500} alt="gif" />
            </div>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          {/* ✅ Conditional Rendering: Show Verification Input or Signup Form */}
          {!isVerificationStep ? (
            <form className="space-y-4" onSubmit={handleSignup}>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 text-[#333333] py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border text-[#333333] border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={!isLoaded || loading}
                className={`w-full text-white py-2 rounded-md 
                ${!isLoaded || loading ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"}`}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={handleVerification}>
              <div>
                <input
                  type="text"
                  placeholder="Enter Verification Code"
                  className="w-full px-4 text-[#333333] py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white py-2 rounded-md bg-green-500 hover:bg-green-600"
              >
                Verify Code
              </button>
            </form>
          )}

          {!isVerificationStep && (
            <div className="flex justify-center items-center mt-2">
              <p className="text-[#5f5f5f] text-sm">
                Already registered?{" "}
                <span
                  onClick={() => router.push("/signin")}
                  className="font-semibold text-textp cursor-pointer"
                >
                  Sign In
                </span>
              </p>
            </div>
          )}

          {!isVerificationStep && (
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="mx-4 text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
          )}

          {/* ✅ Google Sign-up Button */}
          {!isVerificationStep && (
            <button
              className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 text-gray-600 hover:bg-gray-100"
              onClick={() =>
                signUp?.authenticateWithRedirect({
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
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;