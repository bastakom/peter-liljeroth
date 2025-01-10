"use client";
import { useState } from "react";

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
    <div id="contact-form" className="p-[2rem] md:p-[0rem]">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center lg:w-[37.5vw] flex-col mb-6">
          <input
            className="w-full border-2 border-black smallerFont lg:mediumFont rounded py-2 px-4 focus:border-transparent focus:ring-2 focus:ring-gray-100 focus:outline-none"
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
        <div className="flex items-center lg:w-[37.5vw] flex-col mb-6">
          <input
            className="w-full border-2 border-black smallerFont lg:mediumFont rounded py-2 px-4 focus:border-transparent focus:ring-2 focus:ring-gray-100 focus:outline-none"
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
        <div className="flex items-center lg:w-[37.5vw] flex-col mb-6">
          <input
            className="w-full border-2 border-black smallerFont lg:mediumFont rounded py-2 px-4 focus:border-transparent focus:ring-2 focus:ring-gray-100 focus:outline-none"
            id="number"
            name="number"
            type="text"
            placeholder="Telefon"
            value={formData.number}
            onChange={handleInputChange}
          />
        </div>

        {/* Meddelande */}
        <div className="flex items-center lg:w-[37.5vw] flex-col mb-6">
          <textarea
            className="w-full border-black smallerFont md:mediumFont md:h-[304px] resize-none border-2 rounded py-2 px-4  focus:text-[black] focus:border-transparent focus:ring-2 focus:ring-gray-100 focus:outline-none"
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
          <label htmlFor="checkbox">
            Jag godkänner att ni hanterar mina personuppgifter enligt ovan.{" "}
            <br></br>
            Läs mer om hur vi behandlar dina personuppgifter här
          </label>
        </div>
        {/* Submit knapp */}
        <div className="flex justify-center lg:justify-start lg:w-[37.5vw] ">
          <button
            type="submit"
            className={`border-2 border-black lg:w-[30%] font-bold py-3 px-6 focus:outline-none ${
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
