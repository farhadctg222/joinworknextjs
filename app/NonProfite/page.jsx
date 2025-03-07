import React from 'react';


export const metadata = {
  title: 'সাশ্রয়ী মূল্যের সার্ভিস প্ল্যাটফর্ম',
    content:'ন্যায্যমূল্যে খাবার, ডাক্তার, আইনজীবী ও সামাজিক সহায়তা'
}

const page = () => {
    return (
        <div>
           
            <ul>


                <h1 className='mt-10  text-lg text-center bg-[#ffcb0d] p-5'>দাতা সংস্থা থেকে তহবিল সংগ্রহ</h1>
                <li>
                   
                    <ol className='list-decimal p-10 text-justify'>
                        <li>অনেক দেশি-বিদেশি দাতা সংস্থা (donor agencies) এনজিওকে তহবিল দিয়ে থাকে। আমরা এসব সংস্থার কাছ থেকে অনুদান (grants) পাওয়ার জন্য প্রকল্প প্রস্তাব (project proposals) তৈরি করে আবেদন পাঠানো ব্যবস্থা করবো।</li>
                        <li>UN, USAID, DFID, World Bank, এবং বিভিন্ন আন্তর্জাতিক এনজিও থেকে অনুদান পাওয়া জন্য অনালাইনে বা ইমেলে যোগাযোগ করবো।</li>
                       
                    </ol>
                </li>
                <h1 className='text-lg bg-[#ffcb0d] text-center p-5'>করপোরেট সামাজিক দায়বদ্ধতা (CSR) ফান্ডিং</h1>
                <ol className='list-decimal  p-10 text-justify'>
                    <li>বড় করপোরেট প্রতিষ্ঠানগুলো তাদের সামাজিক দায়বদ্ধতার (Corporate Social Responsibility) অংশ হিসেবে এনজিওকে তহবিল দিয়ে থাকে। আমরা সেই করপোরেট প্রতিষ্ঠানের সাথে যোগাযোগ করে তাদের সামাজিক উদ্যোগের অংশ হতে উৎসাহিত করবো।</li>
                </ol>
                <h1 className='text-lg bg-[#ffcb0d] text-center p-5'> স্থানীয় দাতা এবং ব্যক্তিগত অনুদান</h1>
                <ol className='list-decimal p-10 text-justify'>
                    <li>স্থানীয় দাতা, ধনী ব্যক্তি, ব্যবসায়ী এবং ফিলানথ্রপিস্টদের কাছে গিয়ে সরাসরি অনুদান প্রার্থনা করবো।</li>
                    <li>পারিবারিক ভিত্তিক অনুদান (Family Foundations) এবং ব্যক্তিগত দাতা যারা দাতব্য কাজে আগ্রহী তাদের সাথে সংযোগ স্থাপন করবো।</li>
                </ol>

                <h1 className='text-lg bg-[#ffcb0d] text-center p-5'> ফান্ডরেইজিং ইভেন্ট আয়োজন</h1>
                <ol className='list-decimal p-10 text-justify'>
                    <li>ফান্ডরেইজিং ইভেন্ট (যেমন গালা ডিনার, চ্যারিটি কনসার্ট, নিলাম বা দৌড় প্রতিযোগিতা) আয়োজন করে তহবিল সংগ্রহ করা যায়। এসব ইভেন্টে স্থানীয় কমিউনিটির সম্পৃক্ততা এবং কর্পোরেট প্রতিষ্ঠানকে স্পন্সর হিসেবে যুক্ত করতে চেষ্টা করবো।</li>
                   
                </ol>
                <h1 className='text-lg bg-[#ffcb0d] text-center  p-5'>স্বেচ্ছাসেবী সদস্যদের তহবিল সংগ্রহ প্রচেষ্টা</h1>
                <ol className='list-decimal  p-10 text-justify'>
                    <li>আমরা যারা  স্বেচ্ছাসেবীরা তাদের সামাজিক নেটওয়ার্কের মাধ্যমে তহবিল সংগ্রহে অংশ নিবো। তাদেরকে ছোট ছোট দাতা খুঁজে বের করতে উৎসাহিত করবো।</li>
                   
                </ol>
               
            </ul>
        </div>
    );
};

export default page;
