import React, { useState } from "react";
import { assets } from "../assets/assets";
import Input from "../components/Input";
import axios from "axios";

const NewProduct = () => {
  const [category, setCategory] = useState("handicrafts");
  const [formData, setFormData] = useState({
    user_id: "67bf2e0fb1b374150b17d399",
    title: "",
    location: "",
    description: "",
    categoryText: "",
    mainImage: "",
    images: [],
    extraPhoto: "",
    type: category,
    status: "Pending",
    socialMediaUrls: [],
  });

  const handleAddImage = () => {
    if (formData.extraPhoto.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, prev.extraPhoto],
        extraPhoto: "",
      }));
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { extraPhoto, ...finalFormData } = formData;

    try {
      const response = await axios.post("backendUrl", finalFormData);
      console.log("Form submitted successfully:", finalFormData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleClick = (e) => {
    const value = e.currentTarget.getAttribute("data-value");
    setCategory(value);
    setFormData({ ...formData, categoryText: value });
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-end my-8">
        <p className="tajawal-medium text-[24px] title-shadow text-[#626262]">
          باي اس
        </p>
        <img src={assets.logo} />
      </div>
      <div className="flex flex-row justify-around">
        <div
          onClick={handleClick}
          data-value="entrepreneurial"
          className={`bg-[#D8E9E5] rounded-[10px] px-6 py-2 tajawal-extrabold font-[14px] cursor-pointer ${
            category === "entrepreneurial" ? "text-[#438050]" : "text-[#9A9A9A]"
          }`}
        >
          المشاريع الريادية
        </div>
        <div
          onClick={handleClick}
          data-value="handicrafts"
          className={`bg-[#D8E9E5] rounded-[10px] px-6 py-2 tajawal-extrabold font-[14px]  cursor-pointer ${
            category === "handicrafts" ? "text-[#438050]" : "text-[#9A9A9A]"
          }`}
        >
          الحرف اليدوية
        </div>
      </div>

      <p className="text-center my-8 tajawal-extrabold font-[20px]">
        انشئ منتجا
      </p>

      <form className="space-y-2 mx-4" onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Input
              id="title"
              placeholder="اكتب العنوان"
              size={15}
              more={"text-right"}
              required={true}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            id="categoryText"
            placeholder="الفئة"
            size={15}
            more={"text-center"}
            required={true}
            onChange={handleInputChange}
          />

          <div>
            <Input
              id="location"
              placeholder="المدينة"
              size={15}
              more={"text-center"}
              required={true}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <textarea
            id="description"
            rows="6"
            className="text-right tajawal-medium text-[10px] block p-2.5 w-full text-sm bg-[#E9E9E9] text-black placeholder:text-[#A6A6A6] rounded-[10px]"
            placeholder="اشرح عن عملك"
            required={true}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="grid grid-cols-1">
          <Input
            id="mainImage"
            placeholder="اضف رابط للصورة الرئيسية"
            size={15}
            more={"text-right"}
            required={true}
            onChange={handleInputChange}
          />
        </div>

        <p className="text-center my-8 tajawal-extrabold font-[20px]">
          صور اضافية
        </p>

        <div className="flex flex-row gap-2 w-full pb-14">
          <div
            onClick={handleAddImage}
            className="bg-[#438050] p-2 rounded-[10px] items-center justify-center flex w-[54px]"
          >
            <img src={assets.add} />
          </div>
          <Input
            id="extraPhoto"
            placeholder="اضف رابط لصورة اضافية"
            size={15}
            className="w-full"
            more={"text-right"}
            required={false}
            value={formData.extraPhoto}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, extraPhoto: e.target.value }))
            }
          />
        </div>

        <button
          type="submit"
          className="tajawal-bold text-[16px] bg-[rgb(1,84,19,0.74)] w-full text-white p-4 rounded-[10px]"
        >
          ارسل طلب النشر
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
