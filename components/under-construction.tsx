import { ConstructionIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function UnderConstruction() {
  return (
    <Card className="border-dashed border-2 border-yellow-400 bg-yellow-50">
      <CardHeader className="flex items-center gap-2">
        <ConstructionIcon className="text-yellow-600" />
        <CardTitle className="text-lg font-bold text-yellow-800">
          Under Construction
        </CardTitle>
        <Badge
          variant="outline"
          className="ml-auto text-yellow-700 border-yellow-500"
        >
          Coming Soon
        </Badge>
      </CardHeader>
      <CardContent className="text-sm text-yellow-700 space-y-2">
        <p>Halaman ini sedang dalam tahap pengembangan.</p>
        <p>
          Fitur dan konten akan segera tersedia. Terima kasih atas kesabaran
          Anda!
        </p>
      </CardContent>
    </Card>
  );
}
