import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactFooter() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS on client side
  useEffect(() => {
    emailjs.init("p9HAQFLOnkqA9JuTK"); // Replace with your EmailJS Public Key
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const newErrors = {};
    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!email.trim() || !email.includes("@")) {
      newErrors.email = "A valid email is required";
    }
    if (!message.trim()) {
      newErrors.message = "Message is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Prepare your email template parameters
    const templateParams = {
      fullName,
      email,
      message,
    };

    try {
      const response = await emailjs.send(
        "service_kjypsbn",
        "template_9ylfqd7",
        templateParams,
        "p9HAQFLOnkqA9JuTK"
      );
      toast.success("Form successfully submitted!");

      // Reset form fields
      setFullName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Error submitting form, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dark:bg-bgHoverCategory bg-borderColor rounded-2xl w-full">
      <ToastContainer />
      <form
        noValidate
        className="font-clash space-y-6 bg-darkForm p-10 rounded-2xl dark:bg-bgHoverCategory"
        onSubmit={handleSubmit}
      >
        {/* Full Name Field */}
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-normal text-white dark:text-white mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Your Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`w-full p-3 bg-inputBg border border-zinc-600 text-white rounded-xl shadow-sm transition duration-300 ${
                errors.fullName
                  ? "border-red-500"
                  : "border-gray-200 dark:bg-bgHoverCategory"
              } focus:ring-gray-500 focus:border-gray-500 hover:bg-darkFormHover hover:border-zinc-700`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-normal dark:text-white text-white mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 bg-inputBg border border-zinc-600 text-white rounded-xl shadow-sm transition duration-300 ${
              errors.email
                ? "border-red-500"
                : "border-gray-200 dark:bg-bgHoverCategory"
            } focus:ring-gray-500 focus:border-gray-500 hover:bg-darkFormHover hover:border-zinc-700`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-normal dark:text-white text-white mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="8"
            placeholder="Tell us about your project"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full p-3 border border-zinc-600 bg-inputBg text-white rounded-xl shadow-sm transition duration-300 ${
              errors.message
                ? "border-red-500"
                : "border-gray-200 dark:bg-bgHoverCategory"
            } focus:ring-gray-500 focus:border-gray-500 hover:bg-darkFormHover hover:border-zinc-700`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`w-full font-clash font-semibold text-center bg-[#161516] border border-zinc-600 text-subTitleGray px-4 py-3 hover:bg-blackButtonHover transition duration-300 rounded-xl flex items-center justify-center gap-2 text-xl leading-6 group ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {loading ? (
              <>Loading...</>
            ) : (
              <>
                Send
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  className="transform transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:translate-y-[-2px]"
                >
                  <path
                    d="M16.0037 10.3842L7.39712 18.9908L5.98291 17.5766L14.5895 8.96997H7.00373V6.96997H18.0037V17.97H16.0037V10.3842Z"
                    className="fill-zinc-500"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactFooter;
