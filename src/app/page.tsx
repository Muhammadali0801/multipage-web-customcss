
import BannerSlider from "@/components/BanerSlider";
import BestOfTheShoeSpot from "@/components/BestOfShoeSpot";

export default function Home() {
  return (
 <div>
  {/* slider */}
  <BannerSlider />
  {/* welcoming message */}
  <div className="container">
    <h2>Welcome to The Shoe Spot</h2>
    <p className="wel-para">Step into style and comfort with The Shoe Spot! Discover an exquisite collection of shoes that combine elegance, quality&comma; and affordability. Whether you&apos;re looking for the perfect pair for a casual day out or a statement piece for a special occasion&comma; we&apos;ve got something for everyone. At The Shoe Spot&comma; we believe every step matters—make yours unforgettable&ecel;</p>
    </div>
    {/* our best products */}
    <BestOfTheShoeSpot />
     </div>
  );
}
