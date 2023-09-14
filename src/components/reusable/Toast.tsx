import { useToast } from "@/components/ui/use-toast";
import { ToastProps } from "../ui/toast";

interface ToastInterface extends ToastProps {
  buttonText: string;
  description: string;
}

export function Toast({ buttonText, description }: ToastInterface) {
  const { toast } = useToast();
  return (
    <div
      onClick={() => {
        toast({
          description: description,
        });
      }}
    >
      {buttonText}
    </div>
  );
}
