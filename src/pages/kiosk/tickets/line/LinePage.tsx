import BackgroundEffect from "@/components/BackgroundEffect";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { mockApiResponse } from "@/services/mockApiLine";
import LineItem from "@/components/LineItem";

const LinePage = () => {
  const location = useLocation();
  const path = location.pathname;
  const unnotted = path !== '/';
  
  const [lines, setLines] = useState<{ id: string; line_name: string }[]>([]);

  useEffect(() => {
    const fetchLines = async () => {
      const response = await new Promise<{ lines: { id: string; line_name: string }[] }>((resolve) => {
        setTimeout(() => {
          resolve(mockApiResponse);
        }, 500);
      });
      setLines(response.lines);
    };

    fetchLines();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <BackgroundEffect unnotted={unnotted} />
      <div className="flex flex-col justify-center items-center min-h-screen p-4">
        <h2 className="font-bold text-3xl sm:text-4xl text-white uppercase mb-8">Elija una Línea</h2>
        <div className="flex flex-col gap-4 w-full sm:w-96">
          {lines.map(line => (
            <LineItem key={line.id} id={line.id} lineName={line.line_name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinePage;