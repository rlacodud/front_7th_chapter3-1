import { Check, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "./atoms";

interface AlertProps {
  variant:
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "muted"
    | null
    | undefined;
  title?: string;
  description?: string;
}

export const InfoAlert: React.FC<AlertProps> = ({
  variant,
  title,
  description,
}) => {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert variant={variant}>
        <Check />
        <div>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{description}</AlertDescription>
        </div>
        <div className="ml-auto">
          <Button>
            <X />
          </Button>
        </div>
      </Alert>
    </div>
  );
};
