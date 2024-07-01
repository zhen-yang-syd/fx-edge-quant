import React from "react";
import { navItem } from "@/utils/constants";
import { Logo } from "@/public";
import { useRouter } from "next/router";
import { EnvironmentOutlined, MailOutlined } from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full text-white bg-[#373737] cursor-default">
        <div className="footer-container">
          {/* icon */}
          <div className="flex flex-row gap-1 items-center">
            <img src={Logo.src} alt="" className="w-[200px] scale-[150%]" />
            <div className="flex flex-col text-white">
              <span className="font-bold text-xl">
                Midas Markets Investment Manager Ltd
              </span>
              {/* <span className="text-sm">QUANT</span> */}
            </div>
          </div>
          {/* nav bar */}
          <div className="flex flex-col gap-5 items-left">
            {navItem.map((item, index) => (
              <div
                key={index}
                className="text-white text-sm font-semibold hover:text-gray-400 cursor-pointer flex items-center gap-1
                                            transition duration-300 ease-in-out"
                onClick={() => router.push(item.path)}
              >
                {item.name}
              </div>
            ))}
          </div>
          {/* location */}
          <div className="flex flex-col gap-4">
            <div>Contact Us</div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <div className="flex items-center gap-3">
                  <EnvironmentOutlined />
                  Our Office
                </div>
                <Link
                  href="https://www.google.com.au/maps/place/Edge+Academy/@-33.8744951,151.2033146,17z/data=!3m1!5s0x6b12ae4bf52e4117:0x7188c78e56b78e8!4m16!1m9!3m8!1s0x4e0b245b11d7ed7:0xb4aab645be4781ab!2sEdge+Academy!8m2!3d-33.8744194!4d151.2058895!9m1!1b1!16s%2Fg%2F11svndn3xb!3m5!1s0x4e0b245b11d7ed7:0xb4aab645be4781ab!8m2!3d-33.8744194!4d151.2058895!16s%2Fg%2F11svndn3xb?entry=ttu"
                  className="text-blue-300"
                >
                  97, Suite 4 Level 14/99 Bathurst St, Sydney NSW 2000
                </Link>
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex items-center gap-3">
                  <MailOutlined />
                  Official Email
                </div>
                <Link
                  href="mailto:info@midasmarkets.group"
                  className="text-blue-300"
                >
                  info@midasmarkets.group
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#223342] text-white cursor-default">
        <div className="footer-container">
          <div className="w-full flex flex-col gap-2 text-center px-4 sm:px-0">
            <div>
              Copyright © Midas Markets Investment Manager Ltd. Certificate No.
              IBR/AIM/24/1173. All rights reserved.
            </div>
            <Link href="/disclaimer" className="capitlize">
              Privacy Policy | Disclaimer{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
