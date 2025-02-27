import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { CarouselComponent } from "../components/Carousel";

const ProductPage = () => {
  const [info, setInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});

  const getProduct = async () => {
    const response = await axios.get(`{${base_url}}/api/projects/${id}`);
    setInfo(response.data);
  };

  const getUser = async () => {
    const response = await axios.get(`{${base_url}}/api/users/${id}`);
    setUserInfo(response.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-end">
        <img src={assets.back} />
      </div>
      {/*Carousel */}
      <CarouselComponent />

      <div className="flex flex-row-reverse justify-between mt-10 mx-10">
        <div>
          <p className="tajawal-medium text-[24px] text-[#3F3F3F]">
            زخرفة بالنقش اليدوي
            {/* info.title */}
          </p>
        </div>
        <div className="flex flex-row-reverse gap-2 justify-center items-center">
          <img className="h-[15px]" src={assets.location} />
          <p className="tajawal-bold text-[13px] text-[#A6A6A6]">دمشق</p>
          {/* info.location */}
        </div>
      </div>

      <div className="flex justify-end mr-12 mt-6">
        <p className="tajawal-bold text-[#006817] text-[13px]">
          الفئة : الزخرفة
          {/* info.category */}
        </p>
      </div>

      <div className="mt-2">
        <p className="tajawal-medium text-[13px] text-right mr-12 ml-8">
          الصينية النحاسية المنقوشة هي قطعة فنية تُصنع من النحاس أو النحاس
          المطلي بالذهب أو الفضة، وتُزين بنقوش وزخارف يدوية تعكس التراث والثقافة
          المحلية. تُستخدم هذه الصواني لأغراض متنوعة، مثل التقديم والضيافة، أو
          .كقطع ديكور تُعلق على الجدران في البيوت والمطاعم التراثية.
          {/* info.description */}
        </p>
        <div className="mt-2 flex flex-row-reverse">
          <p className="tajawal-medium text-[13px] text-[#006817] text-right mr-12 ml-2 title-shadow">
            مزيد من التفاصيل
          </p>
          <div className="flex justify-center align-middle items-center mt-1">
            <img src={assets.down} className="w-[14px] h-[14px]" />
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse items-center mr-6 mt-4">
        <div className="flex justify-center align-middle items-center">
          <img src={assets.profilepicbg} />
        </div>
        <p className="tajawal-medium text-[13px] mr-[-5px]">خالد عبار</p>
        {/* userInfo.name */}
      </div>

      <div className="flex flex-col">
        <p className="text-right tajawal-extrabold mr-10 font-[13px] mb-4">
          مشاريع مشابهة
        </p>
        <div className="flex flex-row justify-evenly">
          <div className="w-[108px] h-[108px] shadow-2xl"></div>
          <div className="w-[108px] h-[108px] shadow-2xl"></div>
          <div className="w-[108px] h-[108px] shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
