
const services = [
  { id: 1, name: "মাছ-ভাত", category: "খাবার", price: "৭০ টাকা", location: "আগ্রাবাদ" },
  { id: 2, name: "মুরগী-ভাত", category: "খাবার", price: "৬৫ টাকা", location: "কোতোয়ালি" },
  { id: 3, name: "ভাত-ডাল-সবজি", category: " খাবার", price: "৬৫ টাকা", location: "চকবাজার" }
];




export default function Services() {
  return (
    <div>

      <title>ন্যায্যমূল্যে সুস্বাদু খাবার | আগ্রাবাদ, কোতোয়ালি, চকবাজার</title>
<meta name="description" content="সাশ্রয়ী মূল্যে ভাত-মাছ, মুরগি-ভাত, সবজি-ডাল ভাত পাওয়া যাচ্ছে। আগ্রাবাদ, কোতোয়ালি ও চকবাজারে সুস্বাদু খাবার উপভোগ করুন।" />
<meta name="keywords" content="ভাত মাছ ৭০ টাকা, আগ্রাবাদ খাবার, মুরগি ভাত ৬৫, কোতোয়ালি খাবার, সবজি ডাল ভাত ৬৫, চকবাজার খাবার, সাশ্রয়ী খাবার, ন্যায্যমূল্য খাবার" />
<meta name="author" content="JoinWork.org" />
<meta property="og:title" content="ন্যায্যমূল্যে সুস্বাদু খাবার | আগ্রাবাদ, কোতোয়ালি, চকবাজার" />
<meta property="og:description" content="সাশ্রয়ী মূল্যে ভাত-মাছ, মুরগি-ভাত, সবজি-ডাল ভাত পাওয়া যাচ্ছে। আগ্রাবাদ, কোতোয়ালি ও চকবাজারে সুস্বাদু খাবার উপভোগ করুন।" />
<meta property="og:image" content="https://www.joinwork.org/food-banner.jpg" />
<meta property="og:url" content="https://www.joinwork.org/" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="ন্যায্যমূল্যে সুস্বাদু খাবার | আগ্রাবাদ, কোতোয়ালি, চকবাজার" />
<meta name="twitter:description" content="সাশ্রয়ী মূল্যে ভাত-মাছ, মুরগি-ভাত, সবজি-ডাল ভাত পাওয়া যাচ্ছে। আগ্রাবাদ, কোতোয়ালি ও চকবাজারে সুস্বাদু খাবার উপভোগ করুন।" />
<meta name="twitter:image" content="https://www.joinwork.org/food-banner.jpg" />

      
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-center">সার্ভিস লিস্ট</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {services.map((service) => (
            <div key={service.id} className="p-4 bg-white shadow rounded">
              <h3 className="font-bold">{service.name}</h3>
              <p>{service.category}</p>
              <p>📍 {service.location}</p>
              <p>💰 {service.price}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
