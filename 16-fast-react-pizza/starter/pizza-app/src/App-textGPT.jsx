export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-600 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">สร้าง LANDING PAGE</h1>
        <p className="mb-4 mt-2 text-xl">ให้ปัง ดัง และขายดี!</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {/* Dummy browser windows for demo */}
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="h-60 w-80 rounded-lg bg-white p-4 shadow-lg"
          >
            <div className="mb-2 h-5 rounded-t bg-gray-200"></div>
            <div className="flex-1">
              <img
                src={`https://source.unsplash.com/random/800x600?sig=${idx}`}
                alt="Random"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p>UI / UX & Website Experienced Developer</p>
        <p>Website Development Consultant</p>
      </div>
    </div>
  );
}
