import React from 'react';

const page = () => {
    return (
        <div>
            <header className="bg-yellow-300 text-center p-10">
        <h1 className="text-3xl font-bold">ন্যায্যমূল্যে খাবার, ডাক্তার, আইনজীবী ও আরও অনেক কিছু</h1>
        <p className="mt-2">সহজে সার্ভিস খুঁজুন এবং সাশ্রয়ী মূল্যে পান!</p>
      </header>
      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-center">আমাদের সেবাসমূহ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-white shadow rounded">
            <h3 className="font-bold">🥘 ন্যায্যমূল্যে খাবার</h3>
            <p>আজকের খাবারের দাম দেখুন</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="font-bold">👨‍⚕️ ডাক্তার ও স্বাস্থ্যসেবা</h3>
            <p>কাছের ডাক্তার খুঁজুন</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="font-bold">⚖️ আইনজীবী সহায়তা</h3>
            <p>সাশ্রয়ী মূল্যে আইনি সহায়তা নিন</p>
          </div>
        </div>
      </section>
        </div>
    );
};

export default page;
