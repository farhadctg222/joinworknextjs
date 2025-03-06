
const staffList = [
  { id: 1, name: "মো. রফিকুল ইসলাম", role: "খাবার ব্যবস্থাপক", image: "/images/rafik.jpg" },
  { id: 2, name: "আয়েশা সিদ্দিকা", role: "স্বাস্থ্য ও পুষ্টি তদারকি", image: "/images/ayesha.jpg" },
  { id: 3, name: "শফিক আহমেদ", role: "আইন সহায়তা সমন্বয়ক", image: "/images/shafiq.jpg" },
  { id: 4, name: "জাহানারা বেগম", role: "কাস্টমার সার্ভিস প্রতিনিধি", image: "/images/jahanara.jpg" }
];

export default function Staff() {
  return (
    <div>
      
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center">আমাদের টিম</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {staffList.map((staff) => (
            <div key={staff.id} className="bg-white p-4 shadow-md rounded-lg text-center">
              <img src={staff.image} alt={staff.name} className="w-24 h-24 mx-auto rounded-full" />
              <h3 className="font-bold text-lg mt-2">{staff.name}</h3>
              <p className="text-gray-600">{staff.role}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
