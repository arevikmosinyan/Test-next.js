import { adsData } from "@/constants/adsData";
import Image from "next/image";
import Link from "next/link";
import { ADSData } from "../../types/index";

const AdsPage: React.FC<{}> = () => {
  return (
    <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-4">
      {(adsData as ADSData[]).map((elem) => (
        <div
          className="flex flex-col md:flex-row flex-1 items-center justify-center w-full h-full p-5"
          key={elem.title}
        >
          <Image
            src={elem.img}
            alt={elem.title}
            width={300}
            height={300}
            className="object-cover"
          />
          <div className="flex flex-1 flex-col items-center justify-center">
            <Link href={elem.link} className="flex items-center justify-center">
              <p
                className="text-base sm:text-2xl text-center m-4 font-medium"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                {elem.title}
              </p>
              <p className="text-blue-600 underline">Details...</p>
            </Link>
            <p
              className="text-base sm:text-lg text-center m-4 font-medium"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {elem.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdsPage;
