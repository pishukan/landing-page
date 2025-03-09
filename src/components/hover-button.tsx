import Image from "next/image";
import Link from "next/link";

const WeChatButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 hover:opacity-80 transition-opacity">
      <Link href="https://wechat.com" target="_blank" rel="noopener noreferrer">
        <div className="bg-green-500 p-2 rounded-full drop-shadow-2xl cursor-pointer opacity-90">
          <Image 
            src="/wechat.png"  // ✅ Use local image inside /public
            alt="WeChat" 
            width={40} 
            height={40}
            priority
          />
        </div>
      </Link>
    </div>
  );
};

export default WeChatButton;
