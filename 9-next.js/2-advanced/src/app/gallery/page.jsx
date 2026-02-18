// Next.js Image Component
import Image from "next/image";

// local image
import localImage from "../../assets/nature.jpg";

// remote url
const remoteUrl = "https://images.pexels.com/photos/4840134/pexels-photo-4840134.jpeg";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-lg mb-2">Local Resim (Optimizasyon Yok)</h1>
        <Image src={localImage} alt="doğa" unoptimized />
      </div>

      <div>
        <h2 className="text-lg mb-2">Local Resim (Optimizasyon Var)</h2>
        <Image src={localImage} alt="doğa" quality={40} priority placeholder="blur" />
      </div>

      <div>
        <h2 className="text-lg mb-2">Remote Resim (Normal)</h2>
        <Image src={remoteUrl} alt="orman" width={1200} height={800} />
      </div>

      <div>
        <h2 className="text-lg mb-2">Remote Resim (Fill)</h2>
        <div className="h-100 relative">
          <Image src={remoteUrl} alt="orman" fill />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
