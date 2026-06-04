import Image from "next/image";
import { basePath } from "../utils/basePath";

export default function Footer() {
  return (
    <footer>
      <div className="py-10 mx-auto max-w-screen-xl bg-light-purple rounded-lg">
        <div className="text-center">
          <Image
            src={`${basePath}/images/bl-logo.svg`}
            alt="Logo"
            width={80}
            height={80}
            className="hg-10-vh mx-auto"
          />
          <h4 className="mt-2 text-gray-900 italic font-poor-story text-lg">
            Building great projects.
          </h4>
          <p className="text-gray-900 font-poor-story">Copyright © Eugene Mpande</p>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/bukhosi-eugene-mpande" className="hover:opacity-75">
            <Image src={`${basePath}/images/github.svg`} alt="GitHub" width={41} height={41} />
          </a>
          <a href="https://www.linkedin.com/in/bukhosi-mpande-6a34a3198" className="hover:opacity-75">
            <Image src={`${basePath}/images/linkedin.svg`} alt="LinkedIn" width={50} height={50} />
          </a>
        </div>
      </div>
      <div
        className="footer-bg-img"
        style={{ background: `url(${basePath}/images/emily-jones-L6WsJ1WS2k8-unsplash.jpg) center / cover no-repeat` }}
      ></div>
    </footer>
  );
}
