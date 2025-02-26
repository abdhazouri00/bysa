import React, { useState } from "react";
import { assets } from "../assets/assets";
import Input from "../components/Input";

const NewProj = () => {
  const [category, setCategory] = useState(null);

  const handleFormSubmit = async () => {
    await axios.post("backendUrl", {});
  };

  const handleClick = (e) => {
    const value = e.currentTarget.getAttribute("data-value");
    setCategory(value);
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
          data-value="المشاريع الريادية"
          className={`bg-[#D8E9E5] rounded-[10px] px-6 py-2 tajawal-extrabold font-[14px] cursor-pointer ${
            category === "المشاريع الريادية"
              ? "text-[#438050]"
              : "text-[#9A9A9A]"
          }`}
        >
          المشاريع الريادية
        </div>
        <div
          onClick={handleClick}
          data-value="الحرف اليدوية"
          className={`bg-[#D8E9E5] rounded-[10px] px-6 py-2 tajawal-extrabold font-[14px]  cursor-pointer ${
            category === "الحرف اليدوية" ? "text-[#438050]" : "text-[#9A9A9A]"
          }`}
        >
          الحرف اليدوية
        </div>
      </div>

      <p className="text-center my-8 tajawal-extrabold font-[20px]">
        انشئ مشروعا
      </p>

      <form className="space-y-2 mx-4">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Input
              id="title"
              placeholder="اكتب العنوان"
              size={15}
              more={"text-right"}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            id="category"
            placeholder="الفئة"
            size={15}
            more={"text-center"}
          />

          <div>
            <Input
              id="city"
              placeholder="المدينة"
              size={15}
              more={"text-center"}
            />
          </div>
        </div>

        <div>
          <textarea
            id="message"
            rows="6"
            className="text-right tajawal-medium text-[10px] block p-2.5 w-full text-sm bg-[#E9E9E9] text-[#A6A6A6] placeholder:text-[#A6A6A6] rounded-[10px]"
            placeholder="اشرح عن عملك"
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            id="study"
            placeholder="رابط لملف دراسة الجدوى"
            size={13}
            more={"text-center"}
          />
          <Input
            id="cavas"
            placeholder="رابط لمخطط نموذج الاعمال"
            size={13}
            more={"text-center"}
          />
        </div>

        <div className="grid grid-cols-1">
          <Input
            id="mainPic"
            placeholder="اضف رابط للصورة الرئيسية"
            size={15}
            more={"text-right"}
          />
        </div>

        <p className="text-center my-8 tajawal-extrabold font-[20px]">
          صور اضافية
        </p>

        <div className="flex flex-row gap-2 w-full pb-14">
          <div className="bg-[#438050] p-2 rounded-[10px] items-center justify-center flex w-[54px]">
            <img src={assets.add} />
          </div>
          <Input
            id="extraPhotos"
            placeholder="اضف رابط لصورة اضافية"
            size={15}
            className="w-full"
            more={"text-right"}
          />
        </div>

        <button className="tajawal-bold text-[16px] bg-[rgb(1,84,19,0.74)] w-full text-white p-4 rounded-[10px]">
          ارسل طلب النشر
        </button>
      </form>
    </div>
  );
};

export default NewProj;
