import React from "react";
import FrontPage from "@/components/FrontPage";

const App: React.FC = () => {
  const tokenData = {
    title: "Generic Token Name $TOKEN",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere nobis atque enim cupiditate, quod velit alias quam ipsam quos numquam blanditiis quasi repellendus molestias consequatur sunt libero placeat accusamus quisquam?",
    imageUrl: "https://media.tenor.com/6ZhzHHYyNxoAAAAM/luffy.gif", // Substituir pelo URL real da imagem
    logoUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHl1c2lxdDVlbDZzNThmcGZobWxuMjJkN2s3NXgzZWJyZnozZnBjcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nQDKSeRlIyfmw/giphy.webp", // Substituir pela URL real do logo
    buyLink: "https://pump.fun/buy-amazing-token", // Substituir pelo link real
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <FrontPage {...tokenData} />
    </div>
  );
};

export default App;
