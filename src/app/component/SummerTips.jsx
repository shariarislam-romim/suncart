
import { TiTick } from "react-icons/ti";

const SummerTips = () => {
    return (
        <div id="pricing" className="py-20 text-center container mx-auto">

            <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Summer Care tips
      </h2>
      <p className="text-[#627382FF] mb-12 text-lg">
        Skincare, healthcare, and essential lifestyle tips for sunny days.
      </p>

        <div className="grid md:grid-cols-3 gap-6 px-4 md:px-12">
        
          <div className={`relative p-8 rounded-2xl shadow-sm transition hover:shadow-2xl hover:-translate-y-2 space-y-3 bg-accent-soft`}>
            <h3 className="text-3xl font-bold mb-6">Skincare Tips</h3>  
             <p className="text-xl font-semibold mb-1 flex items-center gap-1"><TiTick />Use Sunscreen Daily</p>
              <p className="text-m font-normal text-gray-600">Apply SPF 30+ sunscreen before going outdoors.</p>

             <p className="text-xl font-semibold mb-1 flex items-center gap-1"><TiTick />Keep Your Skin Hydrated</p>
              <p className="text-m font-normal text-gray-600">Use a lightweight moisturizer to prevent dryness.</p>

             <p className="text-xl font-semibold mb-1 flex items-center gap-1"><TiTick />Cleanse After Sweating</p>
              <p className="text-m font-normal text-gray-600">Wash your face after outdoor activities to remove dirt and excess oil.</p>
        </div>
          <div className={`relative p-8 rounded-2xl shadow-sm transition hover:shadow-2xl hover:-translate-y-2  space-y-3 bg-accent-soft`}>
            <h3 className="text-3xl font-bold mb-6">Healthcare Tips</h3>  
             <p className="text-xl font-semibold mb-1 flex items-center gap-1"><TiTick />Stay Hydrated</p>
              <p className="text-m font-normal text-gray-600">Drink plenty of water throughout the day.</p>

             <p className="text-xl font-semibold mb-1 flex items-center gap-1"><TiTick />Eat Fresh Fruits</p>
              <p className="text-m font-normal text-gray-600">Include watermelon, oranges, and cucumbers in your diet.</p>

             <p className="text-xl font-semibold mb-1 flex items-center gap-1"><TiTick />Avoid Extreme Heat</p>
              <p className="text-m font-normal text-gray-600">Limit outdoor activities during peak sunlight hours (11 AM – 3 PM).</p>
        </div>

          <div className={`relative p-8 rounded-2xl shadow-sm transition hover:shadow-2xl hover:-translate-y-2 space-y-3 bg-accent-soft`}>
            <h3 className="text-3xl font-bold mb-6">Other Tips</h3>  
             <p className="text-xl font-semibold mb-1 flex items-center gap-1"><TiTick />Wear Lightweight Clothing</p>
              <p className="text-m font-normal text-gray-600">Choose breathable fabrics like cotton and linen.</p>

             <p className="text-xl font-semibold mb-1 flex items-center gap-1"><TiTick />Use UV Protection Sunglasses</p>
              <p className="text-m font-normal text-gray-600">Protect your eyes from harmful UV rays.</p>

             <p className="text-xl font-semibold mb-1 flex items-center gap-1"><TiTick />Carry Summer Essentials</p>
              <p className="text-m font-normal text-gray-600">Keep a water bottle, hat, and sunscreen with you when traveling outdoors.</p>
        </div>
          
    </div>

        </div>
    );
};

export default SummerTips;