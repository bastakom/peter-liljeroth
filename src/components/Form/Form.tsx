"use client";

import Link from "next/link";
import { useState } from "react";
import style from "../scss/contact.module.scss";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckBox = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { content: "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ name: "", number: "", email: "", message: "" });
        setIsChecked(false);
        setIsModalOpen(true);
      }
    } catch {
      throw new Error("failed");
    }
  };

  return (
    <div id="contact-form container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center lg:w-[full] flex-col mb-6 mt-10 lg:mt-0">
          <input
            className="w-full border-[1px] border-black smallerFont lg:mediumFont rounded py-2 px-4 focus:border-transparent focus:ring-2 focus:ring-gray-100 focus:outline-none"
            id="name"
            name="name"
            type="text"
            placeholder="Namn*"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* E-post */}
        <div className="flex items-center flex-col mb-6">
          <input
            className="w-full border-[1px] border-black smallerFont lg:mediumFont rounded py-2 px-4 focus:border-transparent focus:ring-2 focus:ring-gray-100 focus:outline-none"
            id="email"
            name="email"
            type="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Telefon */}
        <div className="flex items-center flex-col mb-6">
          <input
            className="w-full border-[1px] border-black smallerFont lg:mediumFont rounded py-2 px-4 focus:border-transparent focus:ring-2 focus:ring-gray-100 focus:outline-none"
            id="number"
            name="number"
            type="text"
            placeholder="Telefon"
            value={formData.number}
            onChange={handleInputChange}
          />
        </div>

        {/* Meddelande */}
        <div className="flex items-center flex-col mb-6">
          <textarea
            className="w-full border-black smallerFont md:mediumFont md:h-[304px] resize-none border-[1px] rounded py-2 px-4  focus:text-[black] focus:border-transparent focus:ring-2 focus:ring-gray-100 focus:outline-none"
            id="message"
            name="message"
            rows={5}
            placeholder="Meddelande"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="flex items-start gap-2 mb-[30px]">
          <input
            id="checkbox"
            className=" border-black bg-[#24272D] w-[22px] h-[22px] md:w-[22px]"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckBox}
          />
          <label htmlFor="checkbox" className="text-left text-[16px]">
            <span className="font-inter-thin">
              Jag godkänner att ni hanterar mina personuppgifter enligt ovan.
            </span>
            <Link
              href="/integritetspolicy"
              className="font-inter-thin text-[16px] ml-[3px]"
            >
              Läs mer om hur vi behandlar dina personuppgifter här
            </Link>
          </label>
        </div>
        {/* Submit knapp */}
        <div className="flex w-full pb-14 lg:pb-0">
          <button
            type="submit"
            className={`${style.contactButton} ${
              !isChecked ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
            disabled={!isChecked}
          >
            Skicka
          </button>
        </div>
      </form>
    </div>
  );
};
