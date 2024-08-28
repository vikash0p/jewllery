"use client";
import BreadcumbHeading from "@/components/reusableComponents/BreadcumbHeading";
import SubHeading from "@/components/reusableComponents/SubHeading";
import React, { useReducer, FormEvent, ChangeEvent } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

// Define the type for the form state
interface FormState {
  name: string;
  email: string;
  message: string;
}

// Define the type for the form actions
type FormAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_MESSAGE"; payload: string }
  | { type: "RESET_FORM" };

// Define the initial state for the form
const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

// Define the reducer function
const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const ContactPage: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", state);
    dispatch({ type: "RESET_FORM" });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    if (id === "name") dispatch({ type: "SET_NAME", payload: value });
    if (id === "email") dispatch({ type: "SET_EMAIL", payload: value });
    if (id === "message") dispatch({ type: "SET_MESSAGE", payload: value });
  };

  return (
    <div className="">
      <BreadcumbHeading heading="Contact Us" subHeading="Home / Contact Us" />

      <div className="container mx-auto grid md:grid-cols-2 gap-8 py-10">
        {/* Contact Form */}
        <div>
          <SubHeading sub="Get In Touch" />
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border rounded p-2"
                placeholder="Your Name"
                value={state.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded p-2"
                placeholder="Your Email"
                value={state.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full border rounded p-2"
                placeholder="Your Message"
                rows={5}
                value={state.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button className="bg-orange-400 text-white rounded p-2 w-full hover:bg-orange-500 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Company Info */}
        <div>
         
          <SubHeading sub="Contact Information" />
          <div className="space-y-4">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-orange-400 text-xl mr-3" />
              <p>123 Jewelry St, New York, NY 10001</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-orange-400 text-xl mr-3" />
              <p>(123) 456-7890</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-orange-400 text-xl mr-3" />
              <p>info@jewelrywebsite.com</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27999.507556568784!2d77.09098029999998!3d28.6914879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724661040315!5m2!1sen!2sin"
              width={600}
              height={300}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
