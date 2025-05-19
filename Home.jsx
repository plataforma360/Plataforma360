
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Plataforma 360</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        Experimente a imersão total com nossos vídeos e fotos em 360º. Perfeito para eventos, negócios e muito mais.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-4">
          <CardContent>
            <h2 className="text-2xl font-semibold">Serviços</h2>
            <p>Oferecemos captura e produção de conteúdo em 360º para eventos e empresas.</p>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardContent>
            <h2 className="text-2xl font-semibold">Galeria</h2>
            <p>Veja alguns de nossos melhores trabalhos em 360º.</p>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardContent>
            <h2 className="text-2xl font-semibold">Contato</h2>
            <p>Entre em contato para saber mais e solicitar um orçamento.</p>
          </CardContent>
        </Card>
      </div>

      <Button className="mt-8" size="lg" variant="default">Solicitar Orçamento</Button>
    </div>
  );
}
