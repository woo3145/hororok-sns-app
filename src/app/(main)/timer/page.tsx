import { EggInventorySection } from '@/page-sections/monta/EggInventorySection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full h-full py-4 overflow-y-scroll scrollbar-hide space-y-2">
      <p className="text-sm text-center text-muted-foreground">
        tip. 공부를 하면 보유중인 알들을 부화시킬 수 있어요
      </p>

      {/* Character Section */}
      <div className="w-full mx-auto">
        <Image
          width={500}
          height={500}
          src="/bottles/bottle_1.png"
          alt="orange"
        />
      </div>

      {/* Egg Section */}
      <EggInventorySection />
      {/* Streak Section */}
      <div className="flex flex-col justify-center px-4 pt-4">
        <p className="text-center text-sm font-bold pb-4">스트릭 (임시)</p>
        <img
          src="http://mazandi.herokuapp.com/api?handle=lcwoo3145&theme=warm"
          alt="zandi"
        />
      </div>
    </div>
  );
}
